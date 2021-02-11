import * as kafka from 'kafka-node';
import { KafkaMessage } from '../constants';
import { log } from './helpers';

const createProducer = (client: kafka.KafkaClient): kafka.Producer => {
  const producer = new kafka.Producer(client);
  producer.on('ready', () => {
    log('Kafka listers are ready');
  });
  producer.on('error', (err) => log(err));
  return producer;
};

const createMessage = (
  topic: string,
  partition: number,
  messages: any,
): KafkaMessage => {
  const payload: KafkaMessage = {
    topic,
    partition,
    messages,
  };
  return payload;
};

const handleProducer = (producer: kafka.Producer, payload: KafkaMessage) => {
  producer.send([payload], (err, data) => {
    log(`message sent: ${JSON.stringify(data)}`);
  });
};

export { createProducer, createMessage, handleProducer };
