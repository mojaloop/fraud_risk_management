/* eslint-disable @typescript-eslint/no-explicit-any */
import Koa from 'koa';
import * as swagger from 'swagger2';
import { ui, validate } from 'swagger2-koa';
import bodyParser from 'koa-bodyparser';
import { Server } from 'http';
import router from './router';
import { LoggerService } from './utils';
import path from 'path';

class App extends Koa {
  public servers: Server[];

  constructor() {
    super();

    // bodyparser needs to be loaded first in order to work
    this.servers = [];
    this.use(bodyParser());
    this.configureRoutes();
    this.configureMiddlewares();
  }

  configureMiddlewares(): void {
    const readSwagger = swagger.loadDocumentSync(path.join(__dirname, 'mojaloop-api.yaml'));
    const swaggerDocument: swagger.Document = readSwagger as swagger.Document;
    this.use(ui(swaggerDocument, '/swagger'));
    this.use(validate(swaggerDocument));

    // LoggerService Middleware
    this.use(async (ctx, next) => {
      await next();
      const rt = ctx.response.get('X-Response-Time');
      LoggerService.log(`${ctx.method} ${ctx.url} - ${rt}`);
    });

    // x-response-time
    this.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
    });
  }

  configureRoutes(): void {
    // Bootstrap application router
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
