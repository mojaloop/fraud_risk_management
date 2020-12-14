import * as kafka from 'kafka-node';
import { ConfigObj } from '../config/config';
import { log } from '../helper';
import handleQuoteMessage from './quote-consumer';

const createConsumer = (topic: string, config: ConfigObj) => new kafka.Consumer(
  new kafka.KafkaClient({ kafkaHost: config.kafkaEndpoint }),
  [{
    topic,
    partition: config.partition,
  }],
  { autoCommit: config.autoCommit },
);

/**
* Subscribe to the configured Kafka server
* to the selected Kafka topic
*/
const createKafkaConsumer = (topic: string, config: ConfigObj) => {
  log('Starting Processing Engine...', topic);
  try {
    const consumer = createConsumer(topic, config);

    consumer.on('message', async (message: kafka.Message) => {
      await handleQuoteMessage(message, topic);
    });

    log('Started Processing Engine.', topic);
  } catch (e) {
    log(`Unhandled exception while starting consumer with details: ${e}`, topic);
  }
};

export default createKafkaConsumer;
