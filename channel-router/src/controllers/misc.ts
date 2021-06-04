import { Context } from 'koa';
import Execute from '../services';

const execute = async (ctx: Context): Promise<Context> => {
  // ctx.body = { result: 'Transaction is valid' };
  return await Execute(ctx);
};

const healthcheck = (ctx: Context): Context => {
  const data = {
    status: 'UP',
  };
  ctx.body = data;

  return ctx;
};

export { execute, healthcheck };
