/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  port: number;
  redisDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  apmLogging: boolean,
  redisConnection: boolean,
  apmServiceName: string,
  apmSecretToken: string,
  apmURL: string,
}

const config: ConfigObj = {
  port: parseInt(process.env.PORT!, 10) || 3000,
  redisDB: <string>process.env.REDIS_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  apmLogging: <boolean>(process.env.APM_LOGGING === 'true'),
  redisConnection: <boolean>(process.env.REDIS_CONNECTION === 'true'),
  apmServiceName: <string>process.env.APM_SERVICE_NAME,
  apmURL: <string>process.env.APM_URL,
  apmSecretToken: <string>process.env.APM_SECRET_TOKEN,
};

export { config, ConfigObj };
