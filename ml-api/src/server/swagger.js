const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

let spec;
let router;

/**
 * Creates the Swagger abstraction layer.
 *
 * @function init
 * @param {Object} config Configuration object for the module `swagger-jsdoc`.
 */
function init(config) {
  spec = swaggerJSDoc(config);
  router = express.Router();

  router.use('/', swaggerUi.serve, swaggerUi.setup(spec));
  router.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(spec);
  });
}

function getRouter() {
  return router;
}

function getSpec() {
  return spec;
}

module.exports = {
  init,
  getRouter,
  getSpec,
};
