import { Context } from 'koa';
import { LoggerService } from '../utils';
import { FlowFileRequest } from '../models/nifi_pb';
import { nifiService } from '../clients/nifi';

export const monitorQuote = async (ctx: Context): Promise<Context> => {
  try {
    const reqData = ctx.request.body as Record<string, unknown>;
    reqData["TransactionType"] = "pain.001.001.11";
    const param: FlowFileRequest = new FlowFileRequest();
    param.setContent(JSON.stringify(reqData));
    const resp = await nifiService.send(param);
    ctx.status = 200;
    ctx.body = { result: resp.getBody() };
  } catch (error) {
    LoggerService.log(error as string);
    ctx.status = 500;
    ctx.body = {
      error: error,
    };
  }
  return ctx;
};

export const monitorTransfer = async (ctx: Context): Promise<Context> => {
  try {
    const reqData = ctx.request.body as Record<string, unknown>;
    const param: FlowFileRequest = new FlowFileRequest();
    reqData["TransactionType"] = "pacs.008.001.10";
    param.setContent(JSON.stringify(reqData));
    const resp = await nifiService.send(param);
    ctx.status = 200;
    ctx.body = { result: resp.getBody() };
  } catch (error) {
    LoggerService.log(error as string);
    ctx.status = 500;
    ctx.body = {
      error: error,
    };
  }

  return ctx;
};