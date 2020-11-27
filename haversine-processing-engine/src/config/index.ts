import path from 'path';
import { config as dotenv } from 'dotenv';

import { KafkaType } from '../constants';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

const config: KafkaType = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topic: <string>process.env.TOPIC,
  partition: parseInt(<any>process.env.PARTITION, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
};

export default config;
