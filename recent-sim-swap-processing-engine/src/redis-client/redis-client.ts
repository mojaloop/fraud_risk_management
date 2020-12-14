import { RedisClient } from 'redis';
import { configuration } from '../config/config';
import { log } from '../helper';

const client: RedisClient = new RedisClient({
  db: configuration.redisDB,
  host: configuration.redisHost,
  port: configuration.redisPort,
});

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async () => {
  client.flushall();
};

/**
 * Checks whether or not the provided value is in the redis set
 * or not.
 * @param value the value to check
 */
const isInSet = (value: string): Promise<number> => new Promise((resolve) => {
  // Determine if a given value is a member of a set.
  client.SISMEMBER('SetName', value, (err, reply) => {
    if (err) {
      log(`Error from Redis with message: \r\n${err}`, 'REDIS');
      resolve(0);
    } else {
      resolve(reply);
    }
  });
});

/**
 * Get the value of a key.
 * @param key the key to check
 */
const get = (key: string): Promise<string> => new Promise((resolve) => {
  // Get the value of a key.
  client.GET(key, (err, reply) => {
    if (err) {
      log(`Error from Redis with message: \r\n${err}`, 'REDIS');
      resolve('');
    } else {
      resolve(reply!);
    }
  });
});

export {
  initializeRedis,
  isInSet,
  get,
};
