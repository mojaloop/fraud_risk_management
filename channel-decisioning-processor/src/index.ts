/* eslint-disable no-console */
import { config } from './config';
import { Context } from 'koa';
import App from './app';

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
