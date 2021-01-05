import path from 'path';
import { config as dotenv } from 'dotenv';
import { ConfigType } from './constants';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env'),
});

const configuration: ConfigType = {
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <number>parseInt(process.env.REDIS_PORT!, 10),
  redisDB: <number>parseInt(process.env.REDIS_DB!, 10),
  redisAuth: <string>process.env.REDIS_AUTH,
  loadFromLocal: <boolean>(process.env.LOAD_FROM_FILE === 'true'),
  reloadTime: <number>parseInt(process.env.RELOAD_TIME!, 10),
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  partition: <number>parseInt(process.env.PARTITION!, 10),
  logTopic: <string>process.env.LOG_TOPIC,
  azureConfig: {
    azureAccount: <string>process.env.AZURE_ACCOUNT,
    azureKey: <string>process.env.AZURE_KEY,
    azureShare: <string>process.env.SHARE_NAME,
    azureDirectory: <string>process.env.AZURE_DIRECTORY,
  },
};

// eslint-disable-next-line import/prefer-default-export
export { configuration };
