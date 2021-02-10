import { RedisClient } from 'redis';
import { ConfigObj } from './config/config';
import { log } from './helper';

const initializeRedis = async (
  redisDB: string,
  redisHost: string,
  redisPort: number,
  redisAuth: string,
): Promise<RedisClient> => {
  const client: RedisClient = new RedisClient({
    db: redisDB,
    host: redisHost,
    port: redisPort,
    auth_pass: redisAuth,
  });
  return client;
};

const get = (client: RedisClient, key: string): Promise<string> =>
  new Promise((resolve) => {
    // Get the value of a key.
    client.GET(key, (err, reply) => {
      if (err) {
        console.log(err);
        log(`Error from Redis with message: \r\n${err}`, 'REDIS');
        resolve('');
      } else {
        resolve(reply!);
      }
    });
  });

// Determine if the Payee ILP is not in the historic transactions for the Payer.
const getILPList = (client: RedisClient, sourceILP: string): Promise<string> =>
  new Promise((resolve) => {
    client.GET(sourceILP, (err, reply) => {
      if (err) {
        log(
          `Error while getting List for ILP from Redis with message: \r\n${err}`,
          'REDIS',
        );
        resolve('Error');
      } else {
        resolve(reply!);
      }
    });
  });

export { get, initializeRedis, getILPList };
