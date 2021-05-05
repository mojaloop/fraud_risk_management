/* eslint-disable no-console */
import { configuration } from './config';
import { Context } from 'koa';
import App from './app';
import apm from 'elastic-apm-node';

if (configuration.apmLogging) {
  apm.start({
    serviceName: configuration.apmServiceName,
    secretToken: configuration.apmSecretToken,
    serverUrl: configuration.apmURL,
  });
}

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
  const server = app.listen(configuration.port, () => {
    console.info(
      { event: 'execute' },
      `API server listening on PORT ${configuration.port}`,
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
