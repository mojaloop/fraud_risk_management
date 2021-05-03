/* eslint-disable @typescript-eslint/no-explicit-any */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes';
import { config } from './config';
import { initializeRedis } from './redis-client';
import { Server } from 'http';

class App extends Koa {
  public servers: Server[];
  constructor() {
    super();

    // bodyparser needs to be loaded first in order to work
    this.servers = [];
    this._configureRoutes();
  }

  async _configureRoutes(): Promise<void> {
    // Bootstrap application router
    const { redisChannelScoring, redisAuth, redisHost, redisPort } = config;
    const redisClient = await initializeRedis(
      redisChannelScoring,
      redisHost,
      redisPort,
      redisAuth,
    );
    this.use((ctx, next) => {
      ctx.state.redisClient = redisClient;
      return next();
    });
    this.use(bodyParser());
    this.use(router.routes());
    this.use(router.allowedMethods());
  }

  listen(...args: any[]): Server {
    const server = super.listen(...args);
    this.servers.push(server);
    return server;
  }

  terminate(): void {
    for (const server of this.servers) {
      server.close();
    }
  }
}

export default App;
