import { RedisClient } from 'redis';
import { LoggerService } from '../helpers';

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

const getScores = async (
  client: RedisClient,
  key: string,
): Promise<string | null> =>
  new Promise((resolve) => {
    // Get the value of a key.
    client.get(key, (err, reply) => {
      if (err) {
        LoggerService.error(err);
        resolve('');
      } else {
        resolve(`${reply}`);
      }
    });
  });

const deleteTransactionRecord = async (
  client: RedisClient,
  key: string,
): Promise<string | null> =>
  new Promise((resolve) => {
    client.del(key, (err, reply) => {
      if (err) {
        LoggerService.error(err);
        resolve('');
      } else {
        resolve(`${reply}`);
      }
    });
  });

const appendScore = (
  client: RedisClient,
  key: string,
  score: string,
): Promise<string | null> =>
  new Promise((resolve) => {
    client.append(key, score, (err, reply) => {
      if (err) {
        LoggerService.error(err);
        resolve('');
      } else {
        resolve(`${reply}`);
      }
    });
  });

export { getScores, initializeRedis, appendScore, deleteTransactionRecord };
