import * as kafka from 'kafka-node';
import { KafkaType } from '../constants';

const createKafkaClient = (kafkaConfig: KafkaType): kafka.KafkaClient => {
  const client = new kafka.KafkaClient({
    kafkaHost: kafkaConfig.kafkaEndpoint,
  });
  return client;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  createKafkaClient,
};
