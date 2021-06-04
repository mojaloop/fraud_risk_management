import { Context } from 'koa';
import { CustomerCreditTransferInitiation } from '../interfaces/iFRMTransaction';
import { iMLTransaction } from '../interfaces/iMLTransaction';

const monitorTransaction = (ctx: Context): Context => {
  let transaction = {} as iMLTransaction;
  transaction = Object.assign(transaction, ctx.request.body);

  try {
    const frmTransaction = new CustomerCreditTransferInitiation(transaction);
    ctx.body = frmTransaction;
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
