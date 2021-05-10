import { RedisClient } from 'redis';
import { LoggerService } from './services/logger.service';

const redisGetJson = (
  key: string,
  client: RedisClient,
): Promise<Array<string>> =>
  new Promise<Array<string>>((resolve) => {
    client.get(key, (err, res) => {
      if (err) {
        LoggerService.error(err);
      }
      const ruleRes = JSON.parse(res ?? '[]');
      resolve(ruleRes);
    });
  });

const redisAppendJson = (
  key: string,
  value: string,
  client: RedisClient,
): Promise<number> =>
  new Promise<number>((resolve) => {
    client.append(key, value, (err, res) => {
      if (err) console.log(err);
      resolve(res);
    });
  });

export { redisGetJson, redisAppendJson };
