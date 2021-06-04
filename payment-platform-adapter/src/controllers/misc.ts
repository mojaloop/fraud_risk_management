import axios from 'axios';
import { Context } from 'koa';
import { configuration } from '../config';
import { CustomerCreditTransferInitiation } from '../interfaces/iFRMTransaction';
import { iMLTransaction } from '../interfaces/iMLTransaction';

const monitorTransaction = async (ctx: Context): Promise<Context> => {
  let transaction = {} as iMLTransaction;
  transaction = Object.assign(transaction, ctx.request.body);

  try {
    const frmTransaction = new CustomerCreditTransferInitiation(transaction);
    const tmsReply = await axios.post(configuration.tmsEndpoint, frmTransaction);

    ctx.body = { tmsReply: (tmsReply.data ?? ""), frmTransaction: frmTransaction }
    ctx.status = 200;
    return ctx;
  } catch (err) {
    console.error(err);
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
