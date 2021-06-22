import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfig } from './interfaces/iConfig';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env'),
});

export const config: IConfig = {
  redisDB: <string>process.env.REDIS_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  restPort: parseInt(process.env.REST_PORT!, 10),
  logstashHost: <string>process.env.LOGSTASH_HOST,
  logstashPort: parseInt(process.env.LOGSTASH_PORT!, 10),
  grpcport: parseInt(process.env.GRPC_PORT!, 10) || 50051,
  networkMap: <string>process.env.NETWORK_MAP,
  functionName: <string>process.env.FUNCTION_NAME,
  ruleEndpoint: <string>process.env.RULE_ENDPOINT,
  apmLogging: <boolean>(process.env.APM_LOGGING === 'true'),
  apmSecretToken: <string>process.env.APM_SECRET_TOKEN,
  apmURL: <string>process.env.APM_URL,
  dev: <string>process.env.NODE_ENV,
};
