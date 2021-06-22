/* eslint-disable no-console */
import { Server, ServerCredentials } from '@grpc/grpc-js';
import Health from './services/health';
import NiFi from './services/nifi';

import { LoggerService } from './utils';
import App from './app';
import { config } from './config';

export const runServer = (): void => {
  // https://github.com/grpc/grpc/issues/6976
  // https://pm2.io/doc/en/runtime/guide/load-balancing/#cluster-environment-variable
  let gRPCport = config.grpcport;
  if (process.env.NODE_APP_INSTANCE) {
    gRPCport += Number(process.env.NODE_APP_INSTANCE);
  }

  /**
   * KOA Rest Server
   */
  const app = new App();

  /**
   * gRPC Server
   */
  const messageSendLimit = 4194304;
  const server: Server = new Server({
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': messageSendLimit,
  });

  server.addService(Health.service, Health.handler);
  server.addService(NiFi.service, NiFi.handler);

  server.bindAsync(`0.0.0.0:${gRPCport}`, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    app.listen(config.restport, () => {
      LoggerService.log(`API restServer listening on PORT ${config.restport}`);
    });

    LoggerService.log(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
    server.start();
  });
};

process.on('uncaughtException', (err) => {
  LoggerService.error(`process on uncaughtException error: ${err}`);
});

process.on('unhandledRejection', (err) => {
  LoggerService.error(`process on unhandledRejection error: ${err}`);
});

runServer();
