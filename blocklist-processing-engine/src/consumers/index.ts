import * as kafka from 'kafka-node';
import { ConfigObj, configuration } from '../config/config';
import { log } from '../helper';
import handleAccountLookupMessage from './account-lookup-consumer';
import handleQuoteMessage from './quote-consumer';
import handleTransferMessage from './transfer-consumer';
import handlePartyMessage from './party-consumer';

let producer: kafka.Producer;

const initializeProducer = () => {
  producer = new kafka.Producer(new kafka.KafkaClient({
    kafkaHost: configuration.kafkaEndpoint,
  }), {});
  return new Promise((resolve) => {
    producer.on('ready', () => resolve());
  });
};

const createConsumer = (topic: string, config: ConfigObj) => new kafka.Consumer(
  new kafka.KafkaClient({ kafkaHost: config.kafkaEndpoint }),
  [{
    topic,
    partition: config.partition,
  }],
  { autoCommit: config.autoCommit },
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

const handleBlock = (msisdn: string, topic: string, blocked: number) => {
  const result = `[BLOCKLIST][${topic}] MSISDN: ${msisdn} ${blocked !== 0 ? 'is blocked' : 'is not blocked'}`;
  return new Promise((resolve) => {
    producer.send(
      [{
        topic: configuration.resultTopic,
        messages: [result],
        partition: configuration.partition,
      }],
      (err) => {
        if (err) { log(`Error while sending result of blocking with message: \r\n${err}`, topic); }
        resolve();
      },
    );
  });
};

/**
* Subscribe to the configured Kafka server
* to the selected Kafka topic
*/
const createKafkaConsumer = (topic: string, config: ConfigObj) => {
  log('Starting Blocklist Processing Engine...', topic);
  try {
    const consumer = createConsumer(topic, config);
    const handleMessage = getMessageHandler(topic);

    consumer.on('message', async (message: kafka.Message) => {
      await handleMessage(message, topic, handleBlock);
    });

    log('Started Blocklist Processing Engine.', topic);
  } catch (e) {
    log(`Unhandled exception while starting consumer with details: ${e}`, topic);
  }
};

export { createKafkaConsumer, initializeProducer };
