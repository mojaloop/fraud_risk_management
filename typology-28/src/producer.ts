import * as kafka from 'kafka-node';
import { config } from './config/config';
import { log } from './helper';

let producer: kafka.Producer;

const initializeProducer = () => {
  producer = new kafka.Producer(
    new kafka.KafkaClient({
      kafkaHost: config.kafkaEndpoint,
    }),
    { partitionerType: 2 },
  );
  return new Promise((resolve) => {
    producer.on('ready', () => resolve(undefined));
  });
};

const publish = (topic: string, message: string) => {
  const result = `{"topic":"${topic}",${message}`;
  return new Promise((resolve) => {
    producer.send(
      [
        {
          topic: config.resultTopic,
          messages: [result],
        },
      ],
      (err) => {
        if (err) {
          log(
            `Error while sending result of blocking with message: \r\n${err}`,
            topic,
          );
        }
        resolve(undefined);
      },
    );
  });
};

export { initializeProducer, publish };
