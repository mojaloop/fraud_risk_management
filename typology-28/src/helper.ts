import { KafkaClient, Producer } from 'kafka-node';
import { RedisClient } from 'redis';
import { config } from './config/config';


const redisGetJson = (key: string, client: RedisClient): Promise<any> =>
  new Promise<any>((resolve) => {
    client.get(key, (err, res) => {
      let ruleRes = JSON.parse(res ?? "[]");
      resolve(ruleRes);
    })
  });

const redisAppendJson = (key: string, value: any, client: RedisClient): Promise<any> =>
  new Promise<any>((resolve) => {
    client.append(key, JSON.stringify(value), (err, res) => {
      if (err)
        console.log(err);
      resolve(res);
    })
  });

export { redisGetJson, redisAppendJson };
