import { RedisClient } from 'redis';
import util from 'util';

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

const getScores = async (client: RedisClient, key: string): Promise<string | null> => new Promise((resolve) => {
  // Get the value of a key.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client.get(key, (err, reply) => {
    if (err) {
      console.log(err);
      resolve('');
    } else {
      resolve(`${reply}`);
    }
  });
});

const appendScore = (client: RedisClient, key: string, score: string): Promise<string | null> =>
  new Promise((resolve) => {
    // Get the value of a key.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client.append(key, score, (err, reply) => {
      if (err) {
        console.log(err);
        resolve('');
      } else {
        resolve(`${reply}`);
      }
    });
  });

export { getScores, initializeRedis, appendScore };
