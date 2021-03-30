/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from './config';
import { Context } from 'koa';
import App from './app';

const app = new App();

function handleError(err: any, ctx: Context) {
  if (ctx == null) {
    console.error({ err, event: 'error' }, 'Unhandled exception occured');
  }
}

async function terminate(signal: any) {
  try {
    await app.terminate();
  } finally {
    console.info({ signal, event: 'terminate' }, 'App is terminated');
    process.kill(process.pid, signal);
  }
}

// Handle uncaught errors
app.on('error', handleError);

// Start server
const server = app.listen(config.port, () => {
  console.info(
    { event: 'execute' },
    `API server listening on PORT ${config.port}, in ${config.env}`,
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

// Expose app
module.exports = app;

export default app;

// import { config } from './config';
// import Koa, { Context } from 'koa';
// import * as swagger from 'swagger2';
// import { ui, validate } from 'swagger2-koa';
// import bodyParser from 'koa-bodyparser';
// import router from './routes';

// const app = new Koa();

// const readSwagger = swagger.loadDocumentSync('src/api.yaml');
// const swaggerDocument: swagger.Document = readSwagger as swagger.Document;

// router.post('/monitor/transactions', (ctx: Context, next) => {
//   ctx.body = {
//     result: 'Transaction is valid',
//   };
//   next();
// });

// app.use(bodyParser())
//   .use(ui(swaggerDocument, '/swagger'))
//   .use(validate(swaggerDocument))
//   .use(router.routes())
//   .use(router.allowedMethods())
//   .listen(3000);
