import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  kafkaEndpoint: string;
  topics: string[];
  resultTopic: string;
  partition: number;
  autoCommit: boolean;
  redisHost: string;
  redisPort: number;
  redisDB: number;
  logTopic: string;
}

const configuration: ConfigObj = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topics: (<any>process.env.TOPICS).split(','),
  resultTopic: <string>process.env.RESULT_TOPIC,
  partition: parseInt(<any>process.env.PARTITION, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <any>process.env.REDIS_PORT,
  redisDB: <any>process.env.REDIS_DB,
  logTopic: <string>process.env.LOG_TOPIC,
};

export { configuration, ConfigObj };
