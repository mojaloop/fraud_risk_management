import { Context } from 'koa';
import axios from 'axios';
import { IConfig } from '../../interfaces';
import { getScores, appendScore, deleteTransactionRecord } from '../../clients';
import { getScore } from './getScore';
import { iScore } from './types';
import { LoggerService } from '../../helpers';

const createPostRequest = (config: IConfig, requestBody: iScore) => {
  const route = `http://${config.transactionRoutingHostname}:${config.transactionRoutingPort}/${config.transactionRoutingPath}`;
  axios.post(route, requestBody);
};

/**
 * @description Only typology 28 for MVP
 */
export const scoreTransaction = async (ctx: Context): Promise<Context> => {
  try {
    const typologiesNeeded = [28];
    const { redisClient, configuration } = ctx.state;
    const { transactionID, typologyNumber, score } = ctx.request.body;

    /**
     * TODO: REMOVE AFTER MVP. This is an easy scoring
     * @description implementation since we're only using 1 typology.
     */
    if (typologiesNeeded.length === 1) {
      const requestBody = getScore([score]);
      await createPostRequest(configuration, requestBody);
      ctx.status = 200;
      ctx.body = requestBody;
      return ctx;
    }

    const jsonTypologiesResults = await getScores(redisClient, transactionID);

    /**
     * @description check if it's the first record for this transaction and record it.
     */
    if (jsonTypologiesResults === 'null') {
      const body = `{"${typologyNumber}": ${score}`;
      await appendScore(redisClient, transactionID, body);
      ctx.body = { result: 'Typology result saved' };
      ctx.response.status = 200;
      return ctx;
    }

    /**
     * @description check if this is a duplicate for the same typology.
     */
    const newResultToBeAdded = `, "${typologyNumber}": ${score}`;
    const testTypologiesNumbers = Object.keys(
      JSON.parse(`${jsonTypologiesResults}}`),
    );
    if (testTypologiesNumbers.includes(`${typologyNumber}`)) {
      ctx.body = { result: 'Typology result already stored' };
      ctx.response.status = 400;
      return ctx;
    }

    /**
     * @description Store the typology result and evaluate if these are all the results, then score it.
     */
    await appendScore(redisClient, transactionID, newResultToBeAdded);
    const typologiesResults = JSON.parse(
      `${jsonTypologiesResults}${newResultToBeAdded}}`,
    );
    const resultsArray: number[] = Object.values(typologiesResults);
    if (resultsArray.length === typologiesNeeded.length) {
      const requestBody = getScore(resultsArray);
      createPostRequest(configuration, requestBody);
      // remove transaction from redis to save memory.
      deleteTransactionRecord(redisClient, transactionID);
      ctx.status = 200;
      ctx.body = requestBody;
      return ctx;
    }
    ctx.body = { result: 'Transaction result saved' };
    ctx.response.status = 400;
  } catch (e) {
    LoggerService.error(e);
    ctx.status = 500;
    ctx.body = e;
  }
  return ctx;
};

export const testResult = async (ctx: Context): Promise<Context> => {
  LoggerService.log(JSON.stringify(ctx.request.body));
  ctx.status = 201;
  return ctx;
};
