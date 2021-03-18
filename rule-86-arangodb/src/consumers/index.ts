import * as kafka from 'kafka-node';
import { ConfigObj } from '../config/config';
import { log } from '../helper';
import { publish } from '../producer/producer';
import quoteConsumer from './quote-consumer';

const createConsumer = (topic: string, config: ConfigObj) =>
  new kafka.ConsumerGroup({
    kafkaHost: config.kafkaEndpoint,
    groupId: config.consumerGroup,
    autoCommit: config.autoCommit,
  },
  [topic]);


const getMessageHandler = (topic: string) => {
  switch (topic) {
    case 'parties':
    case 'transfers':
    case 'accountlookups':
    case 'quotes':
    default:
      return quoteConsumer.handleQuoteMessage;
  }
};

/**
 * Subscribe to the configured Kafka server
 * to the selected Kafka topic
 */
const createKafkaConsumer = (topic: string, config: ConfigObj) => {
  log('Starting Processing Engine...', topic);
  try {
    const consumer = createConsumer(topic, config);
    const handleMessage = getMessageHandler(topic);

    consumer.on('message', async (message: kafka.Message) => {
      const jMessage = JSON.parse(message.value.toString());
      log(`Handling quote message with TransactionID ${jMessage.TransactionID}`, topic);
      const result = await handleMessage(message.value.toString());
      publish(
        topic,
        result,
      );
    });

    consumer.on('error', (error) => console.log(error));

    log('Started Processing Engine.', topic);
  } catch (e) {
    log(
      `Unhandled exception while starting consumer with details: ${e}`,
      topic,
    );
  }
};

export default createKafkaConsumer;
