import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  redisSenderDB: string;
  redisReceiverDB: string;
  redisTypologyCacheDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  channelScoreEndpoint: string;
}

const config: ConfigObj = {
  redisSenderDB: <string>process.env.REDIS_SENDER_DB,
  redisReceiverDB: <string>process.env.REDIS_RECEIVER_DB,
  redisTypologyCacheDB: <string>process.env.REDIS_TYPOLOGY_CACHE_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  channelScoreEndpoint: <string>process.env.CHANNEL_SCORE_ENDPOINT,
};

export { config, ConfigObj };
