import { KafkaClient, Producer } from 'kafka-node';
import { configuration } from './config/config';

/**
 * Makes sure the MSISDN starts with +233
 */
const sanitizeNumber = (number: string): string => {
  let toReturn = number;
  if (number.startsWith('0')) {
    toReturn = number.substring(1);
    toReturn = `+233${number}`;
  } else if (!number.startsWith('+')) {
    toReturn = `+${number}`;
  }
  return toReturn;
};

let logProducer: Producer;
const initializeLoggingProducer = () => {
  logProducer = new Producer(
    new KafkaClient({
      kafkaHost: configuration.kafkaEndpoint,
    }),
    {},
  );
  return new Promise((resolve) => {
    logProducer.on('ready', () => resolve(undefined));
    logProducer.on('error', (error: any) => resolve(error));
  });
};

/** Logs the provided message */
const log = (message: string, topic: string) =>
  new Promise((resolver) => {
    logProducer.send(
      [
        {
          topic: configuration.logTopic,
          messages: [`[${topic}]${message}`],
          partition: configuration.partition,
        },
      ],
      () => resolver(undefined),
    );
  });
export { log, sanitizeNumber, initializeLoggingProducer };
