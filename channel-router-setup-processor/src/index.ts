import bodyParser from 'koa-bodyparser';
import { config } from './config';
import apm from 'elastic-apm-node';
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { LoggerService } from './services/logger.service';
import Health from './servers/health.server';
import ChannelRouter from './servers/channel-router.server';
import App from './app';

if (config.apmLogging) {
  apm.start({
    serviceName: config.functionName,
    secretToken: config.apmSecretToken,
    serverUrl: config.apmURL,
    usePathAsTransactionName: true,
  });
}

export const runServer = async (): Promise<void> => {
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
  server.addService(ChannelRouter.service, ChannelRouter.handler);

  await server.bindAsync(`0.0.0.0:${config.grpcport}`, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    app.listen(config.restPort, () => {
      LoggerService.log(`Rest Server listening on port ${config.restPort}`);
    });

    server.start();
    LoggerService.log(`gRPC Server listening on port ${bindPort}`);
  });
};

process.on('uncaughtException', (err) => {
  LoggerService.error(`process on uncaughtException error: ${err}`);
});

process.on('unhandledRejection', (err) => {
  LoggerService.error(`process on unhandledRejection error: ${err}`);
});

try {
  runServer();
} catch (err) {
  LoggerService.error('Error while starting gRPC server', err);
}
