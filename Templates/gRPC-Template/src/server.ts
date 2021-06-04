import { Server, ServerCredentials } from '@grpc/grpc-js';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { Greeter, GreeterService } from './services/Greeter';
import { Health, HealthService, healthStatus, ServingStatus } from './services/Health';

import router from './router';

import { logger } from './utils';

const restPort = 3000;

// https://github.com/grpc/grpc/issues/6976
// https://pm2.io/doc/en/runtime/guide/load-balancing/#cluster-environment-variable
let gRPCport = 50051;
if (process.env.NODE_APP_INSTANCE) {
  gRPCport += Number(process.env.NODE_APP_INSTANCE);
}

/**
 * KOA Rest Server
 */
const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  logger.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

/**
 * gRPC Server
 */
// Do not use @grpc/proto-loader
const server: Server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

server.addService(GreeterService, new Greeter());
server.addService(HealthService, new Health());

server.bindAsync(`0.0.0.0:${gRPCport}`, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
  if (err) {
    throw err;
  }

  app.listen(restPort, () => {
    logger.info({ event: 'execute' }, `API restServer listening on PORT ${restPort}`);
  });

  logger.info(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
  server.start();
});

// Change service health status
healthStatus.set('helloworld.Greeter', ServingStatus.NOT_SERVING);
