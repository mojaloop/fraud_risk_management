import { Context } from 'koa';
import Router from 'koa-router';
import SayHello from '../controller/sayHello';

const router = new Router();

router.get('/', async (ctx: Context): Promise<Context> => {
  const data = {
    status: 'Client is UP',
    answer: await SayHello(),
  };
  ctx.body = data;

  return ctx;
});

export default router;
