import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

const configuration: ConfigObj = {
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <number>parseInt(process.env.REDIS_PORT!, 10),
  redisDB: <number>parseInt(process.env.REDIS_DB!, 10),
  loadFromLocal: <boolean>(process.env.LOAD_FROM_FILE === 'true'),
};

interface ConfigObj {
  redisHost: string,
  redisPort: number,
  redisDB: number,
  loadFromLocal: boolean,
}

export { configuration, ConfigObj };
