import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

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
  redisDB: <string>process.env.REDIS_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT!, 10),
};

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
  redisDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
}

export { config, ConfigObj };
