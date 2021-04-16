import { Context } from 'koa';
import util from 'util';
import { config } from '../config';
import { getScores, appendScore } from '../redis-client';
import https from 'https';

const scoreTypologies = async (ctx: Context): Promise<Context> => {
  try {
    const typologiesNeeded = [28, 11];
    const { redisClient } = ctx.state;
    const { transactionID, typologyNumber, score } = ctx.request.body;
    const transactionTypology = `${transactionID}-${typologyNumber}`;
    const transactionTypologiesResults = await getScores(redisClient, transactionTypology);
    if (typeof transactionTypologiesResults !== 'string') {
      const body = {
        [typologyNumber]: score,
      };
      await appendScore(redisClient, transactionTypology, JSON.stringify(body));
      ctx.body = { result: 'Typology result saved' };
      ctx.response.status = 200;
      return ctx;
    }
    const typologiesResults = JSON.parse(transactionTypologiesResults);
    typologiesResults[typologyNumber] = score;
    await appendScore(redisClient, transactionTypology, JSON.stringify(typologiesResults));
    if (typologiesResults.length === typologiesNeeded.length) {
      const scoreSum = typologiesResults.reduce((sum: number, score: number) => sum + score);
      const scoreAverage = scoreSum / typologiesResults.length;
      const requestBody = scoreAverage > 0.75
        ? {
          message: 'Transaction is positive for Fraud/Risk',
          score: scoreAverage,
        }
        : {
          message: 'Transaction is negative for Fraud/Risk',
          score: scoreAverage,
        };
      const requestBodyString = JSON.stringify(requestBody);
      const options = {
        hostname: config.channelRoutingHostname,
        port: config.channelRoutingPort,
        path: `/${config.channelRoutingPath}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': requestBodyString.length,
        },
      };

      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', d => {
          process.stdout.write(d);
          resolve();
        });
      });

      req.on('error', error => {
        console.error(error);
        resolve(error);
      });

      req.write(requestBodyString);
      req.end();
    }
  } catch (e) {
    console.log(e);
  }
  return ctx;
};

export { scoreTypologies };
