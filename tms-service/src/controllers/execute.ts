import { Context } from 'koa';
import { LoggerService } from '../utils';
import { FlowFileRequest } from '../models/nifi_pb';
import { nifiService } from '../clients/nifi';

export const monitorTransaction = async (ctx: Context): Promise<Context> => {
  try {
    const reqData = ctx.request.body;
    const param: FlowFileRequest = new FlowFileRequest();
    let objJsonB64 = Buffer.from(JSON.stringify(reqData)).toString("base64");
    param.setContent(objJsonB64);
    const resp = await nifiService.send(param);

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
