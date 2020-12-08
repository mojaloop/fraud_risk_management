import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

const configuration: ConfigObj = {
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <any>process.env.REDIS_PORT,
  redisDB: <any>process.env.REDIS_DB,
};

interface ConfigObj {
  redisHost: string,
  redisPort: number,
  redisDB: number,
}

export { configuration, ConfigObj };
