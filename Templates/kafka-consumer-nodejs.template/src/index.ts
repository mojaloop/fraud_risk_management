import { configuration } from './config/config';
import { initializeProducer, createKafkaConsumer } from './consumers';
import { initializeLoggingProducer } from './helper';

const start = async () => {
  await initializeLoggingProducer();
  await initializeProducer();
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration);
  });
};

start();
