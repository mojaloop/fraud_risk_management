import { config } from './config/config';
import runConsumer from './consumer';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer';
import { initializeRedis } from './redis-client';

const start = async () => {
  const { redisSenderDB, redisReceiverDB, redisHost, redisPort, redisAuth } = config;
  try {
    await initializeLoggingProducer();
    await initializeProducer();
    const redisSenderClient = await initializeRedis(redisSenderDB, redisHost, redisPort, redisAuth);
    const redisReceiverClient = await initializeRedis(redisReceiverDB, redisHost, redisPort, redisAuth);
    // This method will kick off the consumer that will handle any new transactions coming in. 
    await runConsumer(redisSenderClient, redisReceiverClient);
  } catch (e) {
    console.error(e);
  }
};

start();
