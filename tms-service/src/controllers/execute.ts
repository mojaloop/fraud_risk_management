/* eslint-disable */
import { Context } from 'koa';
import { logger } from '../utils';
import { FlowFileRequest } from '../../models/nifi_pb';
import { nifiService } from '../clients/nifi';

export const monitorTransaction = async (ctx: Context): Promise<Context> => {
  try {
    const reqData = ctx.body;
    const param: FlowFileRequest = new FlowFileRequest();

    param.setContent(JSON.stringify(reqData));

    const resp = await nifiService.send(param);

    ctx.body = { result: resp.getBody() };
  } catch (e) {
    logger.error(e);

    ctx.status = 500;
    ctx.body = e;
  }

  return ctx;
};
