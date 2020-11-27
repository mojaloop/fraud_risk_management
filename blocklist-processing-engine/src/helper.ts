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

let producer: Producer;
const initializeLoggingProducer = () => {
  producer = new Producer(new KafkaClient({
    kafkaHost: configuration.kafkaEndpoint,
  }), {});
  return new Promise((resolve) => {
    producer.on('ready', () => resolve());
  });
};

/** Logs the provided message */
const log = (message: string, topic: string) => new Promise((resolver) => {
  producer.send([{
    topic: configuration.logTopic,
    messages: [`[${topic}]${message}`],
    partition: configuration.partition,
  }], () => resolver());
});
export { log, sanitizeNumber, initializeLoggingProducer };
