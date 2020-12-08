import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import {
  initializeRedis,
  loadData,
  insertData,
} from './redis-client';

/**
 * Load all data from the file to Redis
 */

const init = async () => {
  const client = await initializeRedis();
  const historicalData = await loadData();
  try {
    await insertData(client, historicalData);
  } catch (e) {
    console.error('unable to insert data into redis store', e);
  }
};

init();
