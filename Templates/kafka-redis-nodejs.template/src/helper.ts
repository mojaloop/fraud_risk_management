import { KafkaClient, Producer } from 'kafka-node';
import { configuration } from './config/config';

let logProducer: Producer;
const initializeLoggingProducer = (): Promise<void> => {
  logProducer = new Producer(
    new KafkaClient({
      kafkaHost: configuration.kafkaEndpoint,
    }),
    {},
  );
  return new Promise((resolve) => {
    logProducer.on('ready', () => resolve(undefined));
  });
};

/** Logs the provided message */
const log = (message: string, topic: string): Promise<void> =>
  new Promise((resolve) => {
    logProducer.send(
      [
        {
          topic: configuration.logTopic,
          messages: [`['TEMPLATE'][${topic}]${message}`],
          partition: configuration.partition,
        },
      ],
      () => resolve(undefined),
    );
  });
export { log, initializeLoggingProducer };
