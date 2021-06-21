import { Context } from 'koa';
import { IRouterParamContext } from 'koa-router';
import { ExecuteRequest } from '../classes/execute-request';
import { LoggerService } from './logger.service';
import { LogicService } from './logic.service';

export class ApplicationService {
  logicService: LogicService;

  constructor() {
    this.logicService = new LogicService();
  }

  async getOnline(ctx: Context) {
    LoggerService.log('Received Online Request - Status: Online');
    ctx.status = 200;
    ctx.body = 'Channel-Orchestrator is online.';
  }

  async execute(ctx: Context) {
    let request!: ExecuteRequest;
    LoggerService.log('Start - Handle execute request');
    try {
      request = new ExecuteRequest(ctx.request.body);
    } catch (parseError) {
      const failMessage = 'Failed to parse execution request.';

      LoggerService.error(failMessage, parseError, 'ApplicationService');
      ctx.status = 406;
      ctx.body = `${failMessage}\r\n${parseError.message}`;
      LoggerService.log('End - Handle execute request');
      return;
    }

    try {
      const result = await this.logicService.handleTransaction(request);
      ctx.body = result;
      ctx.status = 200;
    } catch (processError) {
      const failMessage = 'Failed to process execution request.';

      LoggerService.error(failMessage, processError, 'ApplicationService');

      ctx.status = 500;
      ctx.body = `${failMessage}\r\n${processError.message}`;
    } finally {
      LoggerService.log('End - Handle execute request');
    }
  }
}
