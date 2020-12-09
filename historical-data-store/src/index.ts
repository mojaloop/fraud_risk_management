import {
  initializeRedis,
  loadData,
  insertData,
  logAllkeys,
} from './redis-client';
import { configuration } from './config';

/**
 * Load all data from the file to Redis
 */

const init = async () => {
  const {
    redisDB,
    redisHost,
    redisPort,
    loadFromLocal,
  } = configuration;
  const client = await initializeRedis(redisHost, redisPort, redisDB);
  const historicalData = await loadData(loadFromLocal);
  try {
    await insertData(client, historicalData);
    await logAllkeys(client);
  } catch (e) {
    console.error('unable to insert data into redis store', e);
  }
};

init();
