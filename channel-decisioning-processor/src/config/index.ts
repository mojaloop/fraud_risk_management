/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env.template'),
});

interface ConfigObj {
  port: number;
  redisChannelScoring: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  channelRoutingHostname: string;
  channelRoutingPort: number;
  channelRoutingPath: string;
}

const config: ConfigObj = {
  port: parseInt(process.env.PORT!, 10) || 3000,
  redisChannelScoring: <string>process.env.REDIS_CHANNEL_SCORING_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  channelRoutingHostname: <string>process.env.CHANNEL_ROUTING_HOSTNAME,
  channelRoutingPort: parseInt(process.env.CHANNEL_ROUTING_PORT!, 10),
  channelRoutingPath: <string>process.env.CHANNEL_ROUTING_PATH,
};

export { config, ConfigObj };
