// STARTUP FILE
import { configuration } from './config/config';
import { initializeProducer, createKafkaConsumer } from './consumers';
import { initializeRedis } from './redis-client/redis-client';

const start = async () => {
  await initializeRedis();
  await initializeProducer();
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration);
  });
};

start();
