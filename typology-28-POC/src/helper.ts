import { KafkaClient, Producer } from 'kafka-node';
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
export { log, initializeLoggingProducer };
