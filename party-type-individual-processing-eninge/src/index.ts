import { configuration } from './config/config';
import createKafkaConsumer from './consumers';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer/producer';

const start = async () => {
  await initializeLoggingProducer();
  await initializeProducer();
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration);
  });
};

start();
