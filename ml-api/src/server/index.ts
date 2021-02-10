import routes from '../routes';

const bodyParser = require('body-parser');
const express = require('express');
const nocache = require('nocache');

function mountMiddlewares(serverInstance: any) {
  serverInstance.use(bodyParser.json());

  serverInstance.use(nocache());

  serverInstance.use((err: any, req: any, res: any, next: any) => {
    // eslint-disable-next-line no-param-reassign
    delete err.stack;
    console.log('error:', err);
    res.status(err.status || 503).json(err);
  });
}

function mountRoutes(serverInstance: any) {
  const router = express.Router();

  routes(router);
  serverInstance.use('/api', router);
}

async function start(config: any) {
  const instance = express();

  mountMiddlewares(instance);
  mountRoutes(instance);

  instance.listen(config.port);

  // eslint-disable-next-line no-console
  console.log(`Server running and listening at port ${config.port}`);

  return instance;
}

module.exports = {
  start,
};
