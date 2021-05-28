import { Context } from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx: Context): Context => {
  const data = {
    status: 'Server is UP',
  };
  ctx.body = data;

  return ctx;
});

export default router;
