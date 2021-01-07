import * as kafka from 'kafka-node';
import async from 'async';
import { RedisClient } from 'redis';
import { ConfigObj, config } from './config/config';
import { log } from './helper';
import handleTransferMessage from './scoring-process';

const createConsumer = (config: ConfigObj) => new kafka.Consumer(
  new kafka.KafkaClient({ kafkaHost: config.kafkaEndpoint, autoConnect: true }),
  [{
    topic: config.topic,
    partition: config.partition,
  }],
  { autoCommit: config.autoCommit },
);

/**
* Subscribe to the configured Kafka server
* to the selected Kafka topic
*/
const createKafkaConsumer = async (client: RedisClient) => {
  const { topic } = config;
  log('Starting Typology 27 engine...', topic);
  try {
    const consumer = createConsumer(config);
    let paused = false;

    const onData = async (message: any) => {
      handleTransferMessage(message, topic, client);
      return Promise.resolve();
    }

    const msgQueue = async.queue(async (data, done) => {
      await handleCB(data, onData);
      done();
    }, config.maxParallelHandles);
    
    msgQueue.drain(async () => {
      if (paused) {
        consumer.resumeTopics([topic]);
        paused = false;
      }
    });

    const handleCB = async(data: any, handler: any) => {
      await handler(data);
    }

    consumer.on('error', (error) => console.log(error));

    consumer.on('message', (message: kafka.Message) => { 
      msgQueue.push(message);
      if (msgQueue.length() > config.maxQueueSize) {
        consumer.pauseTopics([topic]);
        paused = true;
      }
    });
    log('Started Typology 27 engine.', topic);
  } catch (e) {
    log(`Unhandled exception while starting consumer with details: ${e}`, topic);
  }
};

export default createKafkaConsumer;
