import { Request, Response } from 'express';
import { RedisClient } from 'redis';
import { Typology214Type } from '../classes/typology214';
import { config } from '../config/config';
import { redisGetJson, redisAppendJson } from '../helper';
import { initializeRedis } from '../redis-client';
import http from 'http';
import { LoggerService } from './logger.service';

export class ApplicationService {
  typologyCacheClient: RedisClient;

  constructor() {
    this.typologyCacheClient = initializeRedis(
      config.redisTypologyCacheDB,
      config.redisHost,
      config.redisPort,
      config.redisAuth,
    );
  }

  getOnline(response: Response) {
    response.send('Typology 214 is online.');
  }

  async executeRequest(
    request: Request,
    response: Response,
    debug = false,
  ): Promise<void> {
    if (!request.body) {
      const error = new Error(
        'Cannot execute Typology-214, no request body was passed.',
      );

      LoggerService.error(`[ERROR] ${error.message}`);
      response.status(406).send(error.message);
      return;
    }
    try {
      let score = '';
      try {
        const transfer = request.body;
        const transactionID = transfer.transaction.TransactionID;
        let ruleResults = await redisGetJson(
          transactionID,
          this.typologyCacheClient,
        );

        if (!ruleResults || ruleResults.length === 0)
          ruleResults = [
            `{"name": "${transfer.rule.name}", "result": ${transfer.rule.result}}`,
          ];
        else
          ruleResults.push(
            `{"name": "${transfer.rule.name}", "result": ${transfer.rule.result}}`,
          );

        // check if all results are found - for MVP, we are going with just one Rule result.
        if (ruleResults.length < 1) {
          const saveResult = await redisAppendJson(
            transactionID,
            JSON.stringify(ruleResults),
            this.typologyCacheClient,
          );
          response
            .status(200)
            .send('All rules not yet processed for Typology 214');
          return;
        }

        // Convert rule results to Score object
        const scores: Typology214Type = {};
        ruleResults.forEach((rule: string) => {
          const jRule = JSON.parse(rule);
          scores[jRule.name] = jRule.result;
        });

        // Calculate score for Typology-214
        // See https://lextego.atlassian.net/browse/ACTIO-197
        score = this.handleScores(
          scores,
          transfer.transaction.TransactionID,
          transfer.transaction.HTTPTransactionDate,
        );
      } catch (e) {
        console.error(e);
      }

      const res = await this.sendScore(score);

      response
        .status(200)
        .send(`${score}\r\nChannel Score Response:\r\n${res}`);
    } catch (error) {
      const processError = new Error('Failed to process Typology-214 request');
      processError.message += `\n${error.message}`;

      LoggerService.error(`[ERROR] ${processError.message}`);
      response.status(500).send(processError.message);
    }
  }

  // Submit the score to the configured Channel Scoring Engine
  private sendScore(score: string): Promise<void | Error> {
    return new Promise((resolve) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': score.length,
        },
      };

      const req = http.request(config.channelScoreEndpoint, options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (d) => {
          console.log(d.toString());
          resolve();
        });
      });

      req.on('error', (error) => {
        console.error(error);
        resolve(error);
      });

      req.write(score);
      req.end();
    });
  }

  // Composed probability for Typology 214 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
  private handleScores(
    scores: Typology214Type,
    TransactionID: string,
    transactionDate: string,
  ): string {
    const score =
      (scores.rule3 ? 0.2 : 0) +
      (scores.rule12 ? 0.2 : 0) +
      (scores.rule27 ? 0.2 : 0) +
      (scores.rule30 ? 0.2 : 0) +
      (scores.rule48 ? 0.2 : 0) +
      (scores.rule78 ? 0.2 : 0);
    return `"typology":"typology-214","transactionID":"${TransactionID}","score":${score},"createDate":${transactionDate},"processedDate":${Date.now()},
    "score":${score},"typologyNumber": 214,"textResult":"Typology 214 score is ${score}, Reason: ${
  (scores.rule3 ? 'Rule 3, ' : '') +
      (scores.rule12 ? 'Rule 12, ' : '') +
      (scores.rule27 ? 'Rule 27, ' : '') +
      (scores.rule30 ? 'Rule 30, ' : '') +
      (scores.rule48 ? 'Rule 48, ' : '') +
      (scores.rule78 ? 'Rule 78' : '') +
      '"}'
}`;
  }
}
