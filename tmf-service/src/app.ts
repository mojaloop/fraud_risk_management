/* eslint-disable @typescript-eslint/no-explicit-any */

import Koa from 'koa';
import * as swagger from 'swagger2';
import { ui, validate } from 'swagger2-koa';
import bodyParser from 'koa-bodyparser';
import router from './routes';
import { Server } from 'http';

class App extends Koa {
  public server!: Server;

  constructor() {
    super();

    // bodyparser needs to be loaded first in order to work
    this.use(bodyParser());

    this._configureMiddlewares();
    this._configureRoutes();
  }

  _configureMiddlewares(): void {
    const readSwagger = swagger.loadDocumentSync('src/api.yaml');
    const swaggerDocument: swagger.Document = readSwagger as swagger.Document;
    this.use(ui(swaggerDocument, '/swagger'));
    this.use(validate(swaggerDocument));
  }

  _configureRoutes(): void {
    // Bootstrap application router
    this.use(router.routes());
    this.use(router.allowedMethods());
  }

  listen(...args: any[]): Server {
    this.server = super.listen(...args);

    return this.server;
  }

  async terminate(): Promise<void> {
    this.server?.close();
  }
}

export default App;
