import * as kafka from 'kafka-node';
import { log } from './helpers';
import haversine from './haversine';
import { createProducer, createMessage, handleProducer } from './producer';

import { KafkaType } from '../constants';

const handleMessage = async (
  config: KafkaType,
  message: kafka.Message,
  producer: kafka.Producer,
) => {
  const parsedData = await JSON.parse(message.value.toString());
  const {
    lastLocation,
    previousLocation,
    firstTransactionTime,
    secondTransactionTime,
    maxSpeed,
    requestId,
  } = parsedData;
  log(`REQUEST: ${JSON.stringify(parsedData)}`);
  const haversineResult = haversine(
    lastLocation,
    previousLocation,
    firstTransactionTime,
    secondTransactionTime,
    maxSpeed,
  );

  const logMessage = `[HAVERSINE-RESULT] haversine for ${requestId} is ${haversineResult}}`;
  const payload = createMessage(`${config.topic}-result`, config.partition, logMessage);
  log(`RESPONSE: ${JSON.stringify(payload)}`);
  handleProducer(producer, payload);
};

const createKafkaConsumer = (kafkaSettings: KafkaType,
  client: kafka.KafkaClient) => new kafka.Consumer(
  client,
  [{
    topic: kafkaSettings.topic,
    partition: kafkaSettings.partition,
  }],
  { autoCommit: kafkaSettings.autoCommit },
);

const handleKafkaConsumer = (kafkaSettings: KafkaType,
  client: kafka.KafkaClient) => {
  const consumer = createKafkaConsumer(kafkaSettings, client);
  const producer = createProducer(client);
  consumer.on('message',
    async (message: kafka.Message) => handleMessage(kafkaSettings, message, producer))
    .commit((error: any) => {
      if (error) {
        log(`Error while committing message: ${error}, ${kafkaSettings.topic}`);
      }
    });
};

export { createKafkaConsumer, handleKafkaConsumer };
