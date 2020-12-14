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
  partition: parseInt(process.env.PARTITION!, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
  logTopic: <string> process.env.LOG_TOPIC,
  redisDB: <number>parseInt(process.env.REDIS_DB!, 10),
  redisHost: <string>process.env.REDIS_HOST,
  redisPort: <number>parseInt(process.env.REDIS_PORT!, 10),
};

interface ConfigObj {
  kafkaEndpoint: string;
  topics: string[],
  resultTopic: string,
  partition: number,
  autoCommit: boolean,
  logTopic:string
  redisDB: number,
  redisHost: string,
  redisPort: number,
}

export { configuration, ConfigObj };