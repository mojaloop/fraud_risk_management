import { KafkaClient, Producer } from 'kafka-node';
import { configuration } from './config';

let logProducer: Producer;
const initializeLoggingProducer = (kafkaEndpoint: string) => {
  logProducer = new Producer(new KafkaClient({
    kafkaHost: kafkaEndpoint,
  }), {});
  return new Promise((resolve) => {
    logProducer.on('ready', () => resolve(undefined));
    logProducer.on('error', (error) => resolve(error));
  });
};

/** Logs the provided message */
const log = (message: any, topic: string) => new Promise((resolver) => {
  logProducer.send([{
    topic,
    messages: [`[HistoricalDataStore][${topic}] ${message}`],
    partition: configuration.partition,
  }], () => resolver(undefined));
});
export { log, initializeLoggingProducer };
