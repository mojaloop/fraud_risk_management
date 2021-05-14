/* eslint-disable @typescript-eslint/no-explicit-any */
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { configuration } from './config';
import { initializeRedis } from './clients/redisClient';
import { Server } from 'http';
import router from './routes';

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
    const {
      redisDB,
      redisAuth,
      redisHost,
      redisPort,
      redisConnection,
    } = configuration;

    if (redisConnection) {
      const redisClient = await initializeRedis(
        redisDB,
        redisHost,
        redisPort,
        redisAuth,
      );
      this.use((ctx, next) => {
        ctx.state.redisClient = redisClient;
        return next();
      });
    }
    this.use((ctx, next) => {
      ctx.state.configuration = configuration;
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
