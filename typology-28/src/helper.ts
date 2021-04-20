import { KafkaClient, Producer } from 'kafka-node';
import { RedisClient } from 'redis';
import { config } from './config/config';

let logProducer: Producer;
const initializeLoggingProducer = () => {
  logProducer = new Producer(
    new KafkaClient({
      kafkaHost: config.kafkaEndpoint,
    }),
    {},
  );
  return new Promise((resolve) => {
    logProducer.on('ready', () => resolve(undefined));
  });
};

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

/** Logs the provided message */
const log = (message: string, topic: string) =>
  new Promise((resolver) => {
    logProducer.send(
      [
        {
          topic: config.logTopic,
          messages: [`[Typology28][${topic}] ${message}`],
          partition: config.partition,
        },
      ],
      () => resolver(undefined),
    );
  });
export { log, initializeLoggingProducer, redisGetJson, redisAppendJson as redisSetJson };
