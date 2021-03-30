import { Context } from 'koa';

const monitorTrasaction = (ctx: Context): Context => {
  ctx.body = { result: 'Transaction is valid' };
  return ctx;
};

const healthcheck = (ctx: Context): Context => {
  const data = {
    status: 'UP',
  };
  ctx.body = data;
  return ctx;
};

export { monitorTrasaction, healthcheck };
