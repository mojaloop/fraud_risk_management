import { RedisClient } from 'redis';
import csv from 'csvtojson';
import { configuration } from './config';
import { HistoricalDataType } from './constants';

/**
 * Load all data from the file to Redis
 */
const loadData = async (): Promise<HistoricalDataType[]> => csv().fromFile('./src/data/typology_27.csv');

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async (): Promise<RedisClient> => {
  const client: RedisClient = new RedisClient({
    db: configuration.redisDB,
    host: configuration.redisHost,
    port: configuration.redisPort,
  });
  client.on('error', (error) => {
    console.error(error);
  });

  // removes all data from the store
  client.flushall();
  return client;
};

const insertData = async (client: RedisClient, data: HistoricalDataType[]) => {
  const newTransfers: any = data.map((transfer) => {
    const transferKeys = Object.keys(transfer);
    const historicalTransfer = {};
    transferKeys.forEach((transferKey: string) => {
      if (typeof transfer[transferKey] === 'string') {
        historicalTransfer[transferKey] = transfer[transferKey];
      } else {
        historicalTransfer[transferKey] = JSON.stringify(transfer[transferKey]);
      }
    });
    return historicalTransfer;
  });
  newTransfers.forEach((transfer) => {
    client.hmset(`transfer-${transfer.TransactionID}`, transfer);
  });
};

export {
  initializeRedis,
  loadData,
  insertData,
};
