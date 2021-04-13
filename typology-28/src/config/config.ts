import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  kafkaEndpoint: string;
  topic: string;
  resultTopic: string;
  consumerGroup: string;
  partition: number;
  autoCommit: boolean;
  logTopic: string;
  maxQueueSize: number;
  maxParallelHandles: number;
  redisSenderDB: string;
  redisReceiverDB: string;
  redisTypologyCacheDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  hostPort: number;
  channelScoreHostname: string;
  channelScorePort: number;
  channelScorePath: string;
}

const config: ConfigObj = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topic: <string>process.env.TOPIC,
  resultTopic: <string>process.env.RESULT_TOPIC,
  consumerGroup: <string>process.env.CONSUMER_GROUP,
  partition: parseInt(process.env.PARTITION!, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
  logTopic: <string>process.env.LOG_TOPIC,
  maxQueueSize: parseInt(process.env.MAX_QUEUE_SIZE!, 10),
  maxParallelHandles: parseInt(process.env.MAX_PARALLEL_HANDLES!, 10),
  redisSenderDB: <string>process.env.REDIS_SENDER_DB,
  redisReceiverDB: <string>process.env.REDIS_RECEIVER_DB,
  redisTypologyCacheDB: <string>process.env.REDIS_TYPOLOGY_CACHE_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
  hostPort: parseInt(process.env.HOST_PORT!, 10),
  channelScoreHostname: <string>process.env.CHANNEL_SCORE_HOSTNAME,
  channelScorePort: parseInt(process.env.CHANNEL_SCORE_PORT!, 10),
  channelScorePath: <string>process.env.CHANNEL_SCORE_PATH,
};

export { config, ConfigObj };
