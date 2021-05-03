/* eslint-disable no-console */
import { config } from './config';
import { Context } from 'koa';
import App from './app';
import apm from 'elastic-apm-node';

apm.start({
  serviceName: 'channel-decisioning-processor',
  secretToken:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6InRDZTJLUVotZU9ZdXN3cldINktjLTkzVXBNaU1SWHJ1Nm5OR1dNRGM3ck0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJmcm0iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoiYXBtLXNlcnZlci1hcG0tc2VydmVyLXRva2VuLXpkaHNzIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFwbS1zZXJ2ZXItYXBtLXNlcnZlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjI3NzhjY2Q3LTMwMjEtNDdhMy04YTU1LTdiYmJhMGQ1ZjQ3ZCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpmcm06YXBtLXNlcnZlci1hcG0tc2VydmVyIn0.UWqRaNxzBCqHPnzQGiHd2BPk3Gsi81C7_Al3HdYWnfxFmqh3ng1SaAXKm0pNH8OUESiUHI9p0dftJr3A5AgtKALMMIl2OK4oFYVeIgfKYiZ5WYCeiaawLFg6sRph0uYZsfTvhDNmy2NaEElLpIsT7_8XXzc12NCZvIJ6sKL5Ue1GBClSu1avEGKHzq1TNzP2drxsBU-BLJGaXOrTHvJp4w1J-NXKlf0Xluq3eMF-8TLj3Hx06i7pcHi5yGPFGSCf_qu1jPjh-ValPJUfDb9UIQZVepbhuzvI10VXt0JXlUw-nc7yb66SqKvwAp4_W92dYjrP3PeExpfkrGP4-0yzaAzTDocCUKHejO-inI5H16N0SNaGrGTktGj9HK6F_PXGMRqvHCzJKhi6rUpkf_WtcjvKEBlVvLCdsTcgfQOA_JyK-H0-E0yFIhQgN7t0ZaQG_mtduxniG4hIZszwuJzUdEftccOXlBwEdsLncmqxOCZe9epSQ8zqCMR-B4O1W3eBMs8yCzvNz9Zf2GK-gCdJ-ZvUU8JSM6GLnlBj5zBExtBnsc525W6SbxPOTMQsiAjymhLNOgvphfOIiwVHDK1F2QYuSOWDAa9nX8XOBRoc3uqmPnPx8FE3WW5nzzQff_MrAALxDCnMIUgjWpurT-4puH1u1No-jfQzdgb9JPkQiz0',
  serverUrl: 'http://51.11.6.161:8200',
});

const app = new App();

export function handleError(err: Error, ctx: Context): void {
  if (ctx == null) {
    console.error({ err, event: 'error' }, 'Unhandled exception occured');
  }
}

export function terminate(signal: NodeJS.Signals): void {
  try {
    app.terminate();
  } finally {
    console.info({ signal, event: 'terminate' }, 'App is terminated');
    process.kill(process.pid, signal);
  }
}

// Handle uncaught errors
app.on('error', handleError);

// Start server
if (
  Object.values(require.cache).filter(async (m) => m?.children.includes(module))
) {
  const server = app.listen(config.port, () => {
    console.info(
      { event: 'execute' },
      `API server listening on PORT ${config.port}`,
    );
  });
  server.on('error', handleError);

  const errors = ['unhandledRejection', 'uncaughtException'];
  errors.forEach((error) => {
    process.on(error, handleError);
  });

  const signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

  signals.forEach((signal) => {
    process.once(signal, () => terminate(signal));
  });
}

export default app;
