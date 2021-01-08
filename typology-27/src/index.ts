import { config } from './config/config';
import runConsumer from './consumer';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer';
import { initializeRedis } from './redis-client';

const start = async () => {
  try {
    await initializeLoggingProducer();
    await initializeProducer();
    const redisClient = await initializeRedis(config);
    await runConsumer(redisClient);
  } catch (e) {
    console.error(e);
  }
};

start();
