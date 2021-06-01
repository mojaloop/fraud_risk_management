import { Context } from 'koa';
import axios from 'axios';
import { IConfig } from '../interfaces';
import { getScores, appendScore, deleteTransactionRecord } from '../clients';
import { getScore } from '../services/evaluation';
import { iScore } from '../interfaces/iScore';
import { LoggerService } from '../helpers';

const createPostRequest = async (config: IConfig, requestBody: iScore) => {
  const route = `http://${config.transactionRoutingHostname}:${config.transactionRoutingPort}/${config.transactionRoutingPath}`;
  await axios.post(route, requestBody);
};

/**
 * @description Only 1 channel for MVP
 * @param ctx get request data
 * @returns response
 */
const handleScoring = async (ctx: Context): Promise<Context> => {
  try {
    const channelsNeeded = [28];
    const { redisClient, configuration } = ctx.state;
    const { transactionID, channelNumber, score } = ctx.request.body;

    /**
     * TODO: REMOVE AFTER MVP. This is an easy scoring
     * @description implementation since we're only using 1 channel.
     */
    if (channelsNeeded.length === 1) {
      const requestBody = getScore([score], transactionID);

      try {
        await createPostRequest(configuration, requestBody);
        ctx.status = 200;
        ctx.body = requestBody;
        return ctx;
      } catch (error) {
        LoggerService.error(error);
      }
    }

    const jsonChannelsResults = await getScores(redisClient, transactionID);

    /**
     * @description check if it's the first record for this transaction and record it.
     */
    if (jsonChannelsResults === 'null') {
      const body = `{"${channelNumber}": ${score}`;
      try {
        await appendScore(redisClient, transactionID, body);

        ctx.body = { result: 'Channel result saved' };
        ctx.response.status = 200;
        return ctx;
      } catch (error) {
        LoggerService.error(error);
      }
    }

    /**
     * @description check if this is a duplicate for the same Channel.
     */
    const newResultToBeAdded = `, "${channelNumber}": ${score}`;
    const testChannelsNumbers = Object.keys(
      JSON.parse(`${jsonChannelsResults}}`),
    );
    if (testChannelsNumbers.includes(`${channelNumber}`)) {
      ctx.body = { result: 'Channel result already stored' };
      ctx.response.status = 400;
      return ctx;
    }

    /**
     * @description Store the channel result and evaluate if these are all the results, then score it.
     */
    await appendScore(redisClient, transactionID, newResultToBeAdded);
    const channelsResults = JSON.parse(
      `${jsonChannelsResults}${newResultToBeAdded}}`,
    );
    const resultsArray: number[] = Object.values(channelsResults);
    if (resultsArray.length === channelsNeeded.length) {
      const requestBody = getScore(resultsArray, transactionID);
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

/**
 * @description check test the request transaction
 * @param ctx get request data
 * @returns response with ctx
 */
const handleTestRequest = async (ctx: Context): Promise<Context> => {
  LoggerService.log(JSON.stringify(ctx.request.body));
  ctx.status = 201;
  return ctx;
};

export { handleTestRequest, handleScoring };
