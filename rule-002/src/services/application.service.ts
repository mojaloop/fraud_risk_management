import axios from 'axios';
import * as Koa from 'koa';
import { TransactionCheck } from '../classes/transaction-check';
import { configuration } from '../config';
import { IRequest, IResponse, ITypologies } from '../interfaces/iRule002';
import { ArangoDBService } from './arango-client.service';
import { LoggerService } from './logger.service';

const arangodb = new ArangoDBService();

export class ApplicationService {
  async main(ctx: Koa.Context): Promise<void> {
    LoggerService.log('Received Online Request - Status: Online');
    ctx.status = 200;
    ctx.body = 'frm-rule-002.';
  }

  async getOnline(ctx: Koa.Context): Promise<void> {
    LoggerService.log('Received Online Request - Status: Online');
    ctx.status = 200;
    ctx.body = 'frm-rule-002 is online.';
  }

  async execute(ctx: Koa.Context): Promise<void> {
    LoggerService.log('Start - Handle execute request');

    try {
      const request: IRequest = {
        transaction: new TransactionCheck(ctx.request.body.transaction),
      };

      const result: IResponse = {
        transaction: request.transaction,
      };

      const data = ctx.request.body.typologies as ITypologies;

      //   LoggerService.log(`TransactionID ${request.transaction.TransactionID}`);

      // Get the transaction object include payer and payee
      const transactionInfoQuery = `
        FOR doc IN ${configuration.collectionName}
          FILTER doc._id == "${request.transaction.TransactionID}"
          RETURN doc
          `;

      const transactionData = await arangodb.query(transactionInfoQuery);

      if (transactionData && transactionData[0].length > 0) {
        const payeeId = transactionData[0][0]._to;

        const payeeTransactionsQuery = `
          FOR v, e, p IN 2..2 OUTBOUND
            "${payeeId}"
            GRAPH "${configuration.graphName}"
            FILTER e._to == "${payeeId}"
            return p
          `;

        const payeeAllTransactions = await arangodb.query(
          payeeTransactionsQuery,
        );

        // LoggerService.log(
        //   `payeeAllTransactions ${JSON.stringify(payeeAllTransactions)}`,
        // );

        if (payeeAllTransactions && payeeAllTransactions.length > 0) {
          for (const typology of data.typologies) {
            // LoggerService.log(`Sending Result to ${typology.name}`);

            result.rule = {
              rule: 'Rule-002',
              result: true,
            };

            const response = await axios.post(typology.endpoint, {
              transaction: request.transaction,
            });

            // LoggerService.log(`\nResponse ${JSON.stringify(response)}`);
          }
        } else {
          result.rule = {
            rule: 'Rule-002',
            result: false,
          };
        }
      }

      ctx.body = result;
      ctx.status = 200;
    } catch (error) {
      const failMessage = 'Failed to parse execution request.';

      LoggerService.error(failMessage, error, 'ApplicationService');
      ctx.status = 406;
      ctx.body = `${failMessage}\r\n${error.message}`;
      LoggerService.log('End - Handle execute request');
    }
  }
}
