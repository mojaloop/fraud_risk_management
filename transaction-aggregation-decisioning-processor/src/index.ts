import { configuration } from './config';
import { Context } from 'koa';
import App from './app';
import apm from 'elastic-apm-node';
import { LoggerService } from './helpers';

if (configuration.dev === 'production') {
  apm.start({
    serviceName: configuration.apmServiceName,
    secretToken: configuration.apmSecretToken,
    serverUrl: configuration.apmURL,
  });
}

const app = new App();

export function handleError(err: Error, ctx: Context): void {
  if (ctx == null) {
    LoggerService.error(err, undefined, 'Unhandled exception occured');
  }
}

export function terminate(signal: NodeJS.Signals): void {
  try {
    app.terminate();
  } finally {
    LoggerService.log('App is terminated');
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
    LoggerService.log(
      `API server listening on PORT ${configuration.port}`,
      'execute',
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
