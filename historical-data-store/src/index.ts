import {
  initializeRedis,
  loadData,
  insertHistoricalData,
  logAllkeys,
} from './redis-client';
import { configuration } from './config';

const {
  redisDB,
  redisHost,
  redisPort,
  loadFromLocal,
  azureConfig,
  reloadTime,
} = configuration;

/**
 * Load all data from the file to Redis
 */
const init = async () => {
  const client = await initializeRedis(redisHost, redisPort, redisDB);
  setInterval(async () => {
    const historicalData = await loadData(client, loadFromLocal, azureConfig);
    if (historicalData) {
      try {
        await insertHistoricalData(client, historicalData);
        await logAllkeys(client);
      } catch (e) {
        console.error('unable to insert data into redis store', e);
      }
    }
  }, reloadTime);
};

init();
