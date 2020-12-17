import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

const configuration: ConfigObj = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topics: (<any>process.env.TOPICS).split(','),
  resultTopic: <string>process.env.RESULT_TOPIC,
  partition: parseInt(<any>process.env.PARTITION, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <any>process.env.REDIS_PORT,
  redisDB: <any>process.env.REDIS_DB,
  redisAuth: <string>process.env.REDIS_AUTH,
  logTopic: <string> process.env.LOG_TOPIC,
};

interface ConfigObj {
  kafkaEndpoint: string;
  topics: string[],
  resultTopic: string,
  partition: number,
  autoCommit: boolean,
  redisHost: string,
  redisPort: number,
  redisDB: number,
  redisAuth: string,
  logTopic:string
}

export { configuration, ConfigObj };
