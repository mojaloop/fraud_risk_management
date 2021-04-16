import axios from 'axios';
import * as Koa from 'koa';
import { TransactionCheck } from '../classes/transaction-check';
import { IRequest, IResponse, ITypologies } from '../interfaces/iRule002';
import { LoggerService } from './logger.service';

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

  async call(ctx: Koa.Context): Promise<void> {
    LoggerService.log('Start - Handle execute request');

    try {
      const request: IRequest = {
        transaction: new TransactionCheck(ctx.request.body.transaction),
      };

      const result: IResponse = {
        transaction: request.transaction,
      };

      const data = ctx.request.body.typologies as ITypologies;

      for (const typology of data.typologies) {
        LoggerService.log(`Sending Result to ${typology.name}`);

        result.rule = {
          rule: 'Rule-002',
          result: true,
        };

        const response = await axios.post(typology.endpoint, {
          transaction: request.transaction,
        });

        LoggerService.log(`\nResponse ${JSON.stringify(response)}`);
      }

      ctx.body = request;
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
