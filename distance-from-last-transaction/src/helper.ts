import { KafkaClient, Producer } from 'kafka-node';
import { configuration } from './config/config';

let logProducer: Producer;
const initializeLoggingProducer = () => {
  logProducer = new Producer(new KafkaClient({
    kafkaHost: configuration.kafkaEndpoint,
  }), {});
  return new Promise((resolve) => {
    logProducer.on('ready', () => resolve(undefined));
    logProducer.on('error', (error: any) => resolve(error));
  });
};

/** Logs the provided message */
const log = (message: string, topic: string) => new Promise((resolver) => {
  logProducer.send([{
    topic: configuration.logTopic,
    messages: [`[DISTANCEFROMLASTTRANSACTION][${topic}]${message}`],
    partition: configuration.partition,
  }], (error, data) => {
    if (error) throw error;
    resolver(data);
  });
});
export { log, initializeLoggingProducer };
