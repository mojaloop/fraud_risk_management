import { RedisClient } from 'redis';
import { configuration } from '../config/config';
import { log } from '../helper';

const client: RedisClient = new RedisClient({
  db: configuration.redisDB,
  host: configuration.redisHost,
  port: configuration.redisPort,
  auth_pass: configuration.redisAuth
});

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async () => {
  client.flushdb();
};

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
  get,
};
