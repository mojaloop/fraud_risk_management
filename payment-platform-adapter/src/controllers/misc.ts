import axios from 'axios';
import { Context } from 'koa';
import { configuration } from '../config';
import { LoggerService } from '../helpers';
import { CustomerCreditTransferInitiation } from '../interfaces/iFRMTransaction';
import { iMLTransaction } from '../interfaces/iMLTransaction';
import apm from 'elastic-apm-node';

const monitorTransaction = async (ctx: Context): Promise<Context> => {
  let transaction = {} as iMLTransaction;
  transaction = Object.assign(transaction, ctx.request.body);
  let frmTransaction: CustomerCreditTransferInitiation;
  try {

    if (configuration.apmLogging) {
      const span = apm.startSpan("Convert ML message to FRM message");
      frmTransaction = new CustomerCreditTransferInitiation(transaction);
      if (span)
        span.end()
    }
    else
      frmTransaction = new CustomerCreditTransferInitiation(transaction);

    const tmsReply = await axios.post(configuration.tmsEndpoint, frmTransaction);
    LoggerService.log(`Response from TMS Api: ${tmsReply}`);
    ctx.body = frmTransaction;
    ctx.status = 200;
    return ctx;
  } catch (err) {
    LoggerService.error(err);
    ctx.body = { err };
    ctx.status = 500;
    return ctx;
  }
};

const healthcheck = (ctx: Context): Context => {
  const data = {
    status: 'UP',
  };
  ctx.body = data;

  return ctx;
};

export { monitorTransaction, healthcheck };
