import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfigObj } from './interfaces/iConfig';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env'),
});

export const config: IConfigObj = {
  redisHost: <string>process.env.REDIS_HOST,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisPort: <any>process.env.REDIS_PORT,
  redisDB: <any>process.env.REDIS_DB,
};
