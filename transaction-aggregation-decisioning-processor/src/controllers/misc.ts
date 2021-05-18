import { Context } from 'koa';

const handleMonitorTransaction = (ctx: Context): Context => {
  ctx.body = { result: 'Transaction is valid' };
  return ctx;
};

const handleHealthCheck = (ctx: Context): Context => {
  const data = {
    status: 'UP',
  };
  ctx.body = data;

  return ctx;
};

export { handleMonitorTransaction, handleHealthCheck };
