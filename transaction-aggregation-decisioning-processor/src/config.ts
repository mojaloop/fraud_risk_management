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
  redisDB: <string>process.env.REDIS_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  redisConnection: <boolean>(process.env.REDIS_CONNECTION === 'true'),
  apmServiceName: <string>process.env.APM_SERVICE_NAME,
  apmURL: <string>process.env.APM_URL,
  apmSecretToken: <string>process.env.APM_SECRET_TOKEN,
  dbName: <string>process.env.DATABASE_NAME,
  dbURL: <string>process.env.DATABASE_URL,
  dbUser: <string>process.env.DATABASE_USER,
  dbPassword: <string>process.env.DATABASE_PASSWORD,
  graphName: <string>process.env.GRAPH_NAME,
  collectionName: <string>process.env.COLLECTION_NAME,
  dev: <string>process.env.NODE_ENV,
  transactionRoutingHostname: <string>process.env.TRANSACTION_ROUTING_HOST,
  transactionRoutingPort: parseInt(process.env.TRANSACTION_ROUTING_PORT!, 10),
  transactionRoutingPath: <string>process.env.TRANSACTION_ROUTING_PATH,
};
