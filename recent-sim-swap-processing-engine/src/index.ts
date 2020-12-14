import { configuration } from './config/config';
import createKafkaConsumer from './consumers';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer/producer';
import { initializeRedis } from './redis-client/redis-client';

const start = async () => {
  await initializeLoggingProducer();
  await initializeRedis();
  await initializeProducer();
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration);
  });
};

start();
