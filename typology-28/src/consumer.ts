import * as kafka from 'kafka-node';
import async from 'async';
import { RedisClient } from 'redis';
import { ConfigObj, config } from './config/config';
import { log } from './helper';
import handleTransferMessage from './scoring-process';

const createConsumer = (config: ConfigObj) =>
  new kafka.ConsumerGroup(
    {
      kafkaHost: config.kafkaEndpoint,
      groupId: config.consumerGroup,
      autoCommit: config.autoCommit,
    },
    [config.topic],
  );

/**
 * Subscribe to the configured Kafka server
 * to the selected Kafka topic
 */
const createKafkaConsumer = async (
  senderClient: RedisClient,
  receiverClient: RedisClient,
) => {
  const { topic } = config;
  log('Starting Typology 28 engine...', topic);
  try {
    const consumer = createConsumer(config);
    let paused = false;

    const onData = async (message: any) => {
      handleTransferMessage(message, topic, senderClient, receiverClient);
      return Promise.resolve();
    };

    const msgQueue = async.queue(async (data, done) => {
      await handleCB(data, onData);
      done();
    }, config.maxParallelHandles);

    msgQueue.drain(async () => {
      if (paused) {
        consumer.resume();
        paused = false;
      }
    });

    const handleCB = async (data: any, handler: any) => {
      await handler(data);
    };

    consumer.on('error', (error) => console.log(error));

    consumer.on('message', (message: kafka.Message) => {
      msgQueue.push(message);
      if (msgQueue.length() > config.maxQueueSize) {
        consumer.pause();
        paused = true;
      }
    });
    log('Started Typology 28 engine.', topic);
  } catch (e) {
    log(
      `Unhandled exception while starting consumer with details: ${e}`,
      topic,
    );
  }
};

export default createKafkaConsumer;
