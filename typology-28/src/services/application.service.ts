import { Request, Response } from 'express';
import { RedisClient } from 'redis';
import { Typology28Type } from '../classes/typology28';
import { config } from '../config/config';
import { log, redisGetJson, redisSetJson } from '../helper';
import { get, initializeRedis } from '../redis-client';
import https from 'https';

export class ApplicationService {
  topic: string = 'TYPOLOGY-28';
  senderClient: RedisClient;
  receiverClient: RedisClient;
  typologyCacheClient: RedisClient;

  constructor() {
    this.senderClient = initializeRedis(
      config.redisSenderDB,
      config.redisHost,
      config.redisPort,
      config.redisAuth,
    );
    this.receiverClient = initializeRedis(
      config.redisReceiverDB,
      config.redisHost,
      config.redisPort,
      config.redisAuth,
    );
    this.typologyCacheClient = initializeRedis(
      config.redisTypologyCacheDB,
      config.redisHost,
      config.redisPort,
      config.redisAuth,
    );
  }

  getOnline(response: Response) {
    response.send('Typology 28 is online.');
  }

  async executeRequest(
    request: Request,
    response: Response,
    debug = false,
  ): Promise<void> {
    if (!request.body) {
      const error = new Error(
        `Cannot execute Typology-28, no request body was passed.`,
      );

      log(`[ERROR] ${error.message}`, this.topic);
      response.status(406).send(error.message);
      return;
    }
    try {
      let score: string = '';
      try {
        const transfer = request.body;
        const transactionID = transfer.transaction.TransactionID;
        var ruleResults = await redisGetJson(transactionID, this.typologyCacheClient);

        if (!ruleResults || ruleResults.length === 0)
          ruleResults = [`{"name": "${transfer.rule.name}", "result": ${transfer.rule.result}}`];
        else
          ruleResults.push(`{"name": "${transfer.rule.name}", "result": ${transfer.rule.result}}`);

        // check if all results are found - for MVP, we are going with just one Rule result. 
        if (ruleResults.length < 1) {
          var saveResult = await redisSetJson(transactionID, ruleResults, this.typologyCacheClient);
          response.status(200).send('All rules not yet processed for Typology 28');
          return;
        }

        // Convert rule results to Score object
        const scores: Typology28Type = {};
        ruleResults.forEach((rule: string) => {
          const jRule = JSON.parse(rule);
          scores[jRule.name] = jRule.result;
        });

        // Calculate score for Typology-28
        // See https://lextego.atlassian.net/browse/ACTIO-197
        score = this.handleScores(scores, transfer.transaction.TransactionID, transfer.transaction.HTTPTransactionDate);
      } catch (e) {
        console.error(e);
      }

      var res = await this.sendScore(score);

      response.status(200).send(`${score}\r\nChannel Score Response:\r\n${res}`);
    } catch (error) {
      const processError = new Error(
        'Failed to process Typology-28 request',
      );
      processError.message += `\n${error.message}`;

      log(`[ERROR] ${processError.message}`, this.topic);
      response.status(500).send(processError.message);
      return;
    }
  }

  // Submit the score to the configured Channel Scoring Engine
  private sendScore(score: string): Promise<void | Error> {
    return new Promise((resolve) => {
      const options = {

        hostname: config.channelScoreHostname,
        port: config.channelScorePort,
        path: `/${config.channelScorePath}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': score.length
        }
      }

      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
          process.stdout.write(d);
          resolve();
        })
      })

      req.on('error', error => {
        console.error(error);
        resolve(error);
      })

      req.write(score)
      req.end()
    });
  }

  // Composed probability for typology 28 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
  private handleScores(
    scores: Typology28Type,
    TransactionID: string,
    transactionDate: string,
  ): string {
    const score =
      (scores.rule2 ? 0.14 : 0) +
      (scores.rule12 ? 0.14 : 0) +
      (scores.rule16 ? 0.14 : 0) +
      (scores.rule27 ? 0.14 : 0) +
      (scores.rule30 ? 0.14 : 0) +
      (scores.rule63 ? 0.15 : 0) +
      (scores.rule64 ? 0.15 : 0);
    return `{"typology":"typology-28","transactionID":"${TransactionID}","createDate":${transactionDate},"processedDate":${Date.now()},
  "score":${score},"textResult":"Typology 28 score is ${score}, Reason: ${(scores.rule2 ? 'Rule 2, ' : '') +
      (scores.rule12 ? 'Rule 12, ' : '') +
      (scores.rule16 ? 'Rule 16, ' : '') +
      (scores.rule27 ? 'Rule 27, ' : '') +
      (scores.rule30 ? 'Rule 30, ' : '') +
      (scores.rule63 ? 'Rule 63, ' : '') +
      (scores.rule64 ? 'Rule 64' : '') +
      '"}'
      }`

  };
}
