import * as kafka from 'kafka-node';
import { ConfigObj } from '../config/config';
import { log } from '../helper';
import handleAccountLookupMessage from './account-lookup-consumer';
import handleQuoteMessage from './quote-consumer';
import handleTransferMessage from './transfer-consumer';
import handlePartyMessage from './party-consumer';

const createConsumer = (topic: string, config: ConfigObj) => new kafka.ConsumerGroup(
  {
    kafkaHost: config.kafkaEndpoint,
    groupId: 'FoleyTest',
    autoCommit: config.autoCommit,
  }, [
  topic
]
);

const getMessageHandler = (topic: string) => {
  switch (topic) {
    case 'parties':
      return handlePartyMessage;
    case 'transfers':
      return handleTransferMessage;
    case 'accountlookups':
      return handleAccountLookupMessage;
    case 'quotes':
    default:
      return handleQuoteMessage;
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

    consumer.on('message', (message: kafka.Message) => {
      handleMessage(message, topic);
    });
    consumer.on('error', (error) => {
      log('Error while retrieving messages from Kafka', topic);
    });

    log('Started Processing Engine.', topic);
  } catch (e) {
    log(`Unhandled exception while starting consumer with details: ${e}`, topic);
  }
};

export default createKafkaConsumer;
