import { Context } from 'koa';
import { config, ConfigObj } from '../config';
import {
  getScores,
  appendScore,
  deleteTransactionRecord,
} from '../redis-client';
import axios from 'axios';

interface requestBodyType {
  message: string;
  score: number;
}

const sendRequest = (config: ConfigObj, requestBody: requestBodyType) => {
  const route = `http://${config.channelRoutingHostname}:${config.channelRoutingPort}/${config.channelRoutingPath}`;
  axios.post(route, requestBody);
};

const getScore = (resultsArray: number[]) => {
  const scoreSum = resultsArray.reduce(
    (sum: number, score: number) => sum + score,
  );
  const scoreAverage = scoreSum / resultsArray.length;
  return {
    channelNumber: 1,
    message:
      scoreAverage > 0.75
        ? 'Transaction is positive for Fraud/Risk'
        : 'Transaction is Negative for Fraud/Risk',
    score: scoreAverage,
  };
};

const scoreTypologies = async (ctx: Context): Promise<Context> => {
  try {
    // Only typology 28 for MVP
    const typologiesNeeded = [28];
    const { redisClient } = ctx.state;
    const { transactionID, typologyNumber, score } = ctx.request.body;

    // WARNING: REMOVE AFTER MVP. This is an easy scoring
    // implementation since we're only using 1 typology.
    if (typologiesNeeded.length === 1) {
      const requestBody = getScore([score]);
      await sendRequest(config, requestBody);
      ctx.status = 200;
      ctx.body = requestBody;
      return ctx;
    }

    const jsonTypologiesResults = await getScores(redisClient, transactionID);

    // check if it's the first record for this transaction and record it.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (jsonTypologiesResults! === 'null') {
      const body = `{"${typologyNumber}": ${score}`;
      await appendScore(redisClient, transactionID, body);
      ctx.body = { result: 'Typology result saved' };
      ctx.response.status = 200;
      return ctx;
    }

    // check if this is a duplicate for the same typology.
    const newResultToBeAdded = `, "${typologyNumber}": ${score}`;
    const testTypologiesNumbers = Object.keys(
      JSON.parse(`${jsonTypologiesResults}}`),
    );
    if (testTypologiesNumbers.includes(`${typologyNumber}`)) {
      ctx.body = { result: 'Typology result already stored' };
      ctx.response.status = 400;
      return ctx;
    }

    // Store the typology result and evaluate if these are all the results, then score it.
    await appendScore(redisClient, transactionID, newResultToBeAdded);
    const typologiesResults = JSON.parse(
      `${jsonTypologiesResults}${newResultToBeAdded}}`,
    );
    const resultsArray: number[] = Object.values(typologiesResults);
    if (resultsArray.length === typologiesNeeded.length) {
      const requestBody = getScore(resultsArray);
      sendRequest(config, requestBody);
      // remove transaction from redis to save memory.
      deleteTransactionRecord(redisClient, transactionID);
      ctx.status = 200;
      ctx.body = requestBody;
      return ctx;
    }
    ctx.body = { result: 'Typology result saved' };
    ctx.response.status = 400;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    ctx.status = 500;
    ctx.body = e;
  }
  return ctx;
};

const testResult = async (ctx: Context): Promise<Context> => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(ctx.request.body));
  ctx.status = 201;
  return ctx;
};

export { scoreTypologies, testResult };
