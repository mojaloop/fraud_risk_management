const config = require('./config');
const server = require('./server');

async function init() {
  await server.start(config.http);
}

init();
