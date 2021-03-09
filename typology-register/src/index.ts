import { initializeRedis, loadData } from './redis-client';
import { configuration } from './config';
import { initializeLoggingProducer, log } from './helper';

const {
  redisDB,
  redisHost,
  redisPort,
  redisAuth,
  loadFromLocal,
  azureConfig,
} = configuration;

/**
 * Load all data from the file to Redis
 */
const init = async () => {
  const { logTopic, kafkaEndpoint } = configuration;
  await initializeLoggingProducer(kafkaEndpoint);
  const client = await initializeRedis(
    redisHost,
    redisPort,
    redisDB,
    redisAuth,
    logTopic,
  );
  try {
    await loadData(client, loadFromLocal, azureConfig, logTopic);
  } catch (e) {
    log(`unable to insert typology data into redis store: ${e}`, logTopic);
  }
};

init();
