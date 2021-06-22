import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { config } from './config';
import apm from 'elastic-apm-node';
import { ApplicationService } from './services/application.service';
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { LoggerService } from './services/logger.service';
import Health from './servers/health.server';
import ChannelRouter from './servers/channel-router.server';
import RuleEngineServer from './servers/rule-engine.server';

if (config.apmLogging) {
  apm.start({
    serviceName: config.functionName,
    secretToken: config.apmSecretToken,
    serverUrl: config.apmURL,
    usePathAsTransactionName: true,
  });
}

export const runServer = (): void => {
  const appService: ApplicationService = new ApplicationService();

  /**
 * KOA Rest Server
 */
  const app = new Koa();

  const router = new Router();

  router.get(/.*/gim, async (ctx) => {
    await appService.getOnline(ctx);
  });

  router.post('/execute', async (ctx) => {
    await appService.execute(ctx);
  });

  app.use(bodyParser());
  app.use(router.routes());
  app.listen(config.restPort, () => {
    console.log(`API server listening on PORT ${config.restPort}`);
  });


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
  server.addService(RuleEngineServer.service, RuleEngineServer.handler);

  server.bindAsync(`0.0.0.0:${config.grpcport}`, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    app.listen(config.restPort, () => {
      LoggerService.log(`API restServer listening on PORT ${config.restPort}`);
    });

    LoggerService.log(`gRPC:Server:${bindPort}`, new Date().toLocaleString());
    server.start();
  });

}

