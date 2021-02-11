import { config } from './config/config';
import runConsumer from './consumer';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer';
import { initializeRedis } from './redis-client';

const start = async () => {
  const {
    redisSenderDB,
    redisReceiverDB,
    redisHost,
    redisPort,
    redisAuth,
  } = config;
  try {
    await initializeLoggingProducer();
    await initializeProducer();
    const redisSenderClient = await initializeRedis(
      redisSenderDB,
      redisHost,
      redisPort,
      redisAuth,
    );
    const redisReceiverClient = await initializeRedis(
      redisReceiverDB,
      redisHost,
      redisPort,
      redisAuth,
    );

    await runConsumer(redisSenderClient, redisReceiverClient);
  } catch (e) {
    console.error(e);
  }
};

start();
