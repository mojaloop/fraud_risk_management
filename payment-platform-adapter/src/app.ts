/* eslint-disable @typescript-eslint/no-explicit-any */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import * as swagger from 'swagger2';
import { ui, validate } from 'swagger2-koa';
import router from './routes';
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
    const readSwagger = swagger.loadDocumentSync('src/mojaloop-api.yaml');
    const swaggerDocument: swagger.Document = readSwagger as swagger.Document;
    this.use(ui(swaggerDocument, '/swagger'));
    // this.use(validate(swaggerDocument));
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
