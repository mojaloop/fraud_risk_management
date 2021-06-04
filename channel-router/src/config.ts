/* eslint-disable @typescript-eslint/no-non-null-assertion */
// config settings, env variables
import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfig } from './interfaces';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env'),
});

export const configuration: IConfig = {
  functionName: <string>process.env.FUNCTION_NAME,
  port: parseInt(process.env.PORT!, 10) || 3000,
  apmLogging: <boolean>(process.env.APM_LOGGING === 'true'),
  apmServiceName: <string>process.env.APM_SERVICE_NAME,
  apmURL: <string>process.env.APM_URL,
  apmSecretToken: <string>process.env.APM_SECRET_TOKEN,
  dev: <string>process.env.NODE_ENV,
  channelMap: <string>process.env.CHANNEL_MAP,
};
