import { Context } from 'koa';
import util from 'util';
import { getScores } from '../redis-client';

const scoreTypologies = async (ctx: Context): Promise<Context> => {
  try {
    const { transactionID, typologyNumber, score } = ctx.request.body;
    const transactionTypology = `${transactionID}-${typologyNumber}`;
    const get = util.promisify(ctx.state.redisClient.get);
    const things = await getScores(ctx.state.redisClient, transactionTypology);
    console.log(things);
    ctx.body = { result: 'Transaction is valid' };
    ctx.response.status = 200;
  } catch (e) {
    console.log(e);
  }
  return ctx;
};

export { scoreTypologies };
