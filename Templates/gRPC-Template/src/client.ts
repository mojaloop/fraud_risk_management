import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './router/client';

import { logger } from './utils';

const restPort = 3001;

/**
 * KOA Rest Server
 */
const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  logger.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

((): void => {
  try {
    app.listen(restPort, () => {
      logger.info({ event: 'execute' }, `API restServer listening on PORT ${restPort}`);
    });
  } catch (err) {
    logger.error(err);
  }
})();
