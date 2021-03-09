import * as kafka from 'kafka-node';
import { configuration } from './config/config';
import { log } from './helper';

let producer: kafka.Producer;

const initializeProducer = () => {
  producer = new kafka.Producer(
    new kafka.KafkaClient({
      kafkaHost: configuration.kafkaEndpoint,
    }),
    {},
  );
  return new Promise((resolve) => {
    producer.on('ready', () => resolve(undefined));
  });
};

const publish = (topic: string, message: string) => {
  const result = `[AccountDrain][${topic}]${message}`;
  log(result, topic);
  return new Promise((resolve) => {
    producer.send(
      [
        {
          topic: configuration.resultTopic,
          messages: [result],
          partition: configuration.partition,
        },
      ],
      (err) => {
        if (err) {
          log(
            `Error while sending result of account drain with message: \r\n${err}`,
            topic,
          );
        }
        resolve(undefined);
      },
    );
  });
};

export { initializeProducer, publish };
