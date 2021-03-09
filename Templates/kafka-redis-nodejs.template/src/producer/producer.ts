import * as kafka from 'kafka-node';
import { configuration } from '../config/config';
import { log } from '../helper';

let producer: kafka.Producer;

const initializeProducer = (): Promise<void> => {
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

const publish = (topic: string, message: string): Promise<void> => {
  const result = `[TEMPLATE][${topic}] ${message}`;
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
