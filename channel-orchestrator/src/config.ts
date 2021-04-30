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
  typologyMap: <string>process.env.TYPOLOGY_MAP,
  hostPort: parseInt(process.env.HOST_PORT!, 10),
};
