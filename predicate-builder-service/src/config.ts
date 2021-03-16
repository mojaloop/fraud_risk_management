import { config as dotenv } from 'dotenv';
import path from 'path';
import { IConfigObj } from './interfaces/iConfig';

dotenv({
  path: path.resolve(__dirname, '../.env'),
});

export const config: IConfigObj = {
  kafkaEndpoint: <string>process.env.KAFKA_ENDPOINT,
  topic: <string>process.env.TOPIC,
  resultTopic: <string>process.env.RESULT_TOPIC,
  consumerGroup: <string>process.env.CONSUMER_GROUP,
  partition: parseInt(process.env.PARTITION!, 10),
  autoCommit: <any>process.env.AUTO_COMMIT,
  logTopic: <string>process.env.LOG_TOPIC,
  maxQueueSize: parseInt(process.env.MAX_QUEUE_SIZE!, 10),
  maxParallelHandles: parseInt(process.env.MAX_PARALLEL_HANDLES!, 10),
  hostPort: parseInt(process.env.HOST_PORT!, 10),
};
