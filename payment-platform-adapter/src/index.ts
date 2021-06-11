/* eslint-disable no-console */
import { configuration } from './config';
import { Context } from 'koa';
import App from './app';
import apm from 'elastic-apm-node';
import { LoggerService } from './helpers';
import log4js from 'log4js';

if (configuration.apmLogging) {
  apm.start({
    serviceName: configuration.apmServiceName,
    secretToken: configuration.apmSecretToken,
    serverUrl: configuration.apmURL,
    usePathAsTransactionName: true,
  });
}

const app = new App();

export function handleError(err: Error, ctx: Context): void {
  if (ctx == null) {
    LoggerService.error(`Unhandled exception occured; event: 'error'; Error: ${err}`);
  }
}

export function terminate(signal: NodeJS.Signals): void {
  try {
    log4js.shutdown();
    app.terminate();
  } finally {
    LoggerService.warn(`Signal: ${signal}; event: 'terminate'; 'App is terminated'`);
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
    LoggerService.log(`event: 'execute'; API server listening on PORT ${configuration.port}`);
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
