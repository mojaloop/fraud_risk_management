import { Context } from 'koa';
import { config } from '../config';
import axios from 'axios';

const monitorTransaction = async (ctx: Context): Promise<Context> => {
  try {
    const { body } = ctx.request;
    const route = `http://${config.nifiHost}:${config.nifiPort}${config.nifiRoute}`;
    const x = await axios.post(route, body);
    ctx.body = { result: 'Transaction is valid' };
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = e;
  }
  return ctx;
};

const healthcheck = (ctx: Context): Context => {
  const data = {
    status: 'UP',
  };
  ctx.body = data;

  return ctx;
};

const logResponse = (ctx: Context): Context => {
  console.log('received correct body: ', ctx.request.body);
  const data = {
    status: 'UP',
  };
  ctx.body = data;

  return ctx;
};

export { monitorTransaction, healthcheck, logResponse };
