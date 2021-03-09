import { RedisClient } from 'redis';
import { readFile } from 'fs';
import { configuration } from '../config/config';
import { log } from '../helper';

const client: RedisClient = new RedisClient({
  db: configuration.redisDB,
  host: configuration.redisHost,
  port: configuration.redisPort,
  auth_pass: configuration.redisAuth,
});

/**
 * Load all data from the file to Redis
 */
const loadData = (): Promise<string[]> =>
  new Promise((resolve) => {
    readFile('./src/data/BlockedDataNumbers.txt', (error, data) => {
      if (error) {
        log(
          `Error while populating sample data with message: \r\n${error}`,
          'REDIS',
        );
        resolve([]);
      } else {
        const fileData = data.toString();
        const sampleData = fileData.split('\r\n');
        log('Sample data read', 'REDIS');
        resolve(sampleData);
      }
    });
  });

/**
 * Adds the MSDISDN(s) to the Redis block list.
 * @param msisdn the MSISDN(s) to block
 */
const block = (msisdn: string | string[]): Promise<boolean> =>
  new Promise((resolve) =>
    client.SADD('Blocklist', msisdn, (err, reply) => {
      if (err) {
        log(`Error while updating Blocklist with message: \r\n${err}`, 'REDIS');
        resolve(false);
      }
      if (reply) {
        log(`Redis blocklist updated with ${reply} keys`, 'REDIS');
        resolve(true);
      }
    }),
  );

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async () => {
  client.flushdb();
  const sampleData: string[] = await loadData();
  await block(sampleData);
};

/**
 * Checks whether or not the provided MSIDN is on the
 * blocklist or not.
 * @param msisdn the MSISDN to check
 */
const isBlocked = (msisdn: string): Promise<number> =>
  new Promise((resolve) => {
    // Determine if a given value is a member of a set.
    client.SISMEMBER('Blocklist', msisdn, (err, reply) => {
      if (err) {
        log(
          `Error while getting Blocklist from Redis with message: \r\n${err}`,
          'REDIS',
        );
        resolve(0);
      } else {
        resolve(reply);
      }
    });
  });

export { initializeRedis, isBlocked, block };
