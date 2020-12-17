import {
  initializeRedis,
  loadData,
  insertHistoricalData,
  logAllkeys,
} from './redis-client';
import { configuration } from './config';
import { initializeLoggingProducer, log } from './helper';

const {
  redisDB,
  redisHost,
  redisPort,
  redisAuth,
  loadFromLocal,
  azureConfig,
  reloadTime,
} = configuration;

/**
 * Load all data from the file to Redis
 */
const init = async () => {
  const { logTopic, kafkaEndpoint } = configuration;
  await initializeLoggingProducer(kafkaEndpoint);
  const client = await initializeRedis(redisHost, redisPort, redisDB, redisAuth, logTopic);
  setInterval(async () => {
    const historicalData = await loadData(client, loadFromLocal, azureConfig, logTopic);
    if (historicalData) {
      try {
        await insertHistoricalData(client, historicalData);
        await logAllkeys(client, logTopic);
      } catch (e) {
        log(`unable to insert data into redis store: ${e}`, logTopic);
      }
    }
  }, reloadTime);
};

init();
