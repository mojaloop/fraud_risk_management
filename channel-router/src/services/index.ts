import { Context } from 'koa';
import { forkJoin } from 'rxjs';
import { configuration } from '../config';
import { IChannelMap, ITransaction } from '../interfaces';
import http from 'http';
import { LoggerService } from '../helpers';

// service layer: business logic
export default async function Execute(context: Context): Promise<Context> {
  const channelMap: IChannelMap[] = Object.assign(
    new Array<IChannelMap>(),
    JSON.parse(configuration.channelMap),
  );
  let transaction = {} as ITransaction;
  transaction = Object.assign(transaction, context.request.body);

  let channelCounter = 0;
  await forkJoin(
    channelMap.map((channel) => {
      channelCounter++;
      return sendRule(channel.endpoint, transaction);
    }),
  ).toPromise();
  context.body = `[ChannelRouter][Result] ${channelCounter} Channels initiated for transaction ID: ${transaction.TransactionID}`;
  context.status = 200;
  return context;
}

async function sendRule(endpoint: string, req: ITransaction) {
  const toSend = JSON.stringify(req);
  await executePost(endpoint, toSend);
}

// Submit the score to the configured Channel Scoring Engine
async function executePost(
  endpoint: string,
  request: string,
): Promise<void | Error> {
  return new Promise((resolve) => {
    const options: http.RequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': request.length,
      },
    };

    const req = http.request(endpoint, options, (res) => {
      LoggerService.log(`Rule response statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        LoggerService.trace(`StatusCode != 200, request:\r\n${request}`);
      }

      res.on('data', (d) => {
        LoggerService.log(`Rule response data: ${d.toString()}`);
        resolve();
      });
    });

    req.on('error', (error) => {
      LoggerService.error(`Rule response Error data: ${error}`);
      LoggerService.error(`Request:\r\n${request}`);
      resolve(error);
    });

    req.write(request);
    req.end();
  });
}