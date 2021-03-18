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
  consumerGroup: string;
  partition: number;
  autoCommit: boolean;
  dbName: string;
  dbURL: string;
  dbUser: string;
  dbPassword: string;
  graphName: string;
  logTopic: string;
  hostPort: number;
}

const configuration: ConfigObj = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topics: (<string>process.env.TOPICS).split(','),
  resultTopic: <string>process.env.RESULT_TOPIC,
  consumerGroup: <string>process.env.CONSUMER_GROUP,
  partition: parseInt(process.env.PARTITION!, 10),
  autoCommit: <boolean>(process.env.AUTO_COMMIT! as unknown),
  dbName: <string>process.env.DATABASE_NAME,
  dbURL: <string>process.env.DATABASE_URL,
  dbUser: <string>process.env.DATABASE_USER,
  dbPassword: <string>process.env.DATABASE_PASSWORD,
  graphName: <string>process.env.GRAPH_NAME,
  logTopic: <string>process.env.LOG_TOPIC,
  hostPort: parseInt(process.env.HOST_PORT!, 10),
};

export { configuration, ConfigObj };
