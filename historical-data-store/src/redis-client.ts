import { RedisClient } from 'redis';
import csv from 'csvtojson';
import { HistoricalDataType } from './constants';

/**
 * Load all data from the file to Redis
 */
const loadData = async (loadFromLocal: boolean): Promise<HistoricalDataType[]> => {
  if (loadFromLocal) {
    return csv().fromFile('./src/data/typology_27.csv');
  }
  return csv().fromFile('./src/data/typology_27.csv');
};

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async (
  redisHost: string,
  redisPort: number,
  redisDB: number,

): Promise<RedisClient> => {
  const client: RedisClient = new RedisClient({
    db: redisDB,
    host: redisHost,
    port: redisPort,
  });
  client.on('error', (error) => {
    console.error(error);
  });

  // removes all data from the store
  client.flushall();
  return client;
};

const insertData = async (client: RedisClient, data: HistoricalDataType[]) => {
  data.forEach((transfer) => {
    client.append(transfer.ILPSourceAccountAddress, JSON.stringify(transfer));
  });
};

const logAllkeys = async (client: RedisClient) => client.keys('*', (err, keys) => {
  if (err) {
    console.error(err);
  } else {
    console.log('stored keys are: ', keys);
  }
});

export {
  initializeRedis,
  loadData,
  insertData,
  logAllkeys,
};
