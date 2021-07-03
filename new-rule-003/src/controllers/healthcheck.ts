import { Context, Next } from 'koa';
import { HealthCheckRequest } from '../models/health_pb';
import { config } from '../config';
import { LoggerService } from '../services/logger.service';
import { healthService } from '../clients/health.client';

export const healthCheck = async (ctx: Context, next: Next): Promise<void | Context> => {
  try {
    const param: HealthCheckRequest = new HealthCheckRequest();
    param.setService(config.functionName);

    const res = await healthService.check(param);

    let data = {};

    switch (res.getStatus()) {
      case 0:
        data = {
          service: param.getService(),
          status: 'UNKNOWN',
        };
        break;
      case 1:
        data = {
          service: param.getService(),
          status: 'UP',
        };
        break;
      case 2:
        data = {
          service: param.getService(),
          status: 'DOWN',
        };
        break;

      default:
        break;
    }
    ctx.body = data;

    await next();
  } catch (error) {
    LoggerService.error(error);
    ctx.status = 500;
    ctx.body = { result: 'Something went wrong', error };
  }
};
