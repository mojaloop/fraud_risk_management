import { RedisClient } from 'redis';
import { LoggerService } from '../services/logger.service';

let redisClient: RedisClient;

const initializeRedis = (
  redisDB: string,
  redisHost: string,
  redisPort: number,
  redisAuth: string,
): void => {
  redisClient = new RedisClient({
    db: redisDB,
    host: redisHost,
    port: redisPort,
    auth_pass: redisAuth,
  });
};

const redisGetJson = (key: string): Promise<any> =>
  new Promise<any>((resolve) => {
    redisClient.get(key, (err, res) => {
      if (err) {
        LoggerService.error('Error while getting Redis key', err);
        resolve(err);
      }
      let ruleRes = JSON.parse(res ?? "[]");
      resolve(ruleRes);
    })
  });

const redisAppendJson = (key: string, value: any): Promise<any> =>
  new Promise<any>((resolve) => {
    redisClient.append(key, JSON.stringify(value), (err, res) => {
      if (err) {
        LoggerService.error(`Error while saving to Redis key: ${key}`, err);
        resolve(err);
      }
      resolve(res);
    })
  });

export { redisGetJson, redisAppendJson, initializeRedis };
