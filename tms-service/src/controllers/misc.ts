import { Context } from 'koa';
import { config } from '../config';
import axios from 'axios';
import apm from 'elastic-apm-node';
import { LoggerService } from '../helpers/logger';

async function sendRequest(body: any) {
  const route = `http://${config.nifiHost}:${config.nifiPort}${config.nifiRoute}`;
  const nifiResponse = await axios.post(route, body);
  LoggerService.log(`Response received from NiFi: ${nifiResponse}`);
}

const monitorTransaction = async (ctx: Context): Promise<Context> => {
  try {
    const { body } = ctx.request;
    if (config.apmLogging) {
      const span = apm.startSpan("Sending request to NiFi");
      await sendRequest(body);
      if (span)
        span.end()
    } else {
      await sendRequest(body);
    }
    ctx.status = 200;
    ctx.body = { result: 'Transaction is valid and transaction submitted.' };
  } catch (e) {
    LoggerService.error(e);
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
