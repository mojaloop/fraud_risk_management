import axios from 'axios';
import { Context } from 'koa';
import { configuration } from '../config';
import { LoggerService } from '../helpers';
import { CustomerCreditTransferInitiation } from '../interfaces/iPain001Transaction';
import { iMLQuote } from '../interfaces/iMLQuote';
import apm from 'elastic-apm-node';
import { iMLTransfer } from '../interfaces/iMLTransfer';
import { FIToFICustomerCreditTransferV10 } from '../interfaces/iPacs008';

const monitorTransaction = async (ctx: Context): Promise<Context> => {
  let transaction = {} as iMLQuote;
  transaction = Object.assign(transaction, ctx.request.body);
  let frmTransaction: CustomerCreditTransferInitiation;
  try {

    if (configuration.apmLogging) {
      const span = apm.startSpan("Convert ML quote to FRM message");
      frmTransaction = new CustomerCreditTransferInitiation(transaction);
      if (span)
        span.end()
    }
    else
      frmTransaction = new CustomerCreditTransferInitiation(transaction);
    LoggerService.log(`Converted:\r\n${JSON.stringify(transaction)}\r\ninto:\r\n${JSON.stringify(frmTransaction)}`);
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

const transfer = async (ctx: Context): Promise<Context> => {
  let mlTransfer = {} as iMLTransfer;
  mlTransfer = Object.assign(mlTransfer, ctx.request.body);
  let frmTransfer: FIToFICustomerCreditTransferV10;
  try {

    if (configuration.apmLogging) {
      const span = apm.startSpan("Convert ML transfer to FRM message");
      frmTransfer = new FIToFICustomerCreditTransferV10(mlTransfer);
      if (span)
        span.end()
    }
    else
      frmTransfer = new FIToFICustomerCreditTransferV10(mlTransfer);

    LoggerService.log(`Converted:\r\n${JSON.stringify(mlTransfer)}\r\ninto:\r\n${JSON.stringify(frmTransfer)}`);
    const tmsReply = await axios.post(configuration.tmsEndpoint, frmTransfer);
    LoggerService.log(`Response from TMS Api: ${tmsReply}`);
    ctx.body = frmTransfer;
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

export { monitorTransaction, healthcheck, transfer };
