import { configuration } from './config/config';
import createKafkaConsumer from './consumer';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer';
import { initializeRedis } from './redis-client';

const start = async () => {
  await initializeLoggingProducer();
  await initializeProducer();
  const redisClient = await initializeRedis(configuration);
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration, redisClient);
  });
};

start();
