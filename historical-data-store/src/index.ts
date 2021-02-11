import express from 'express';
import {
  initializeRedis,
  loadData,
  insertHistoricalData,
  getAllKeys,
} from './redis-client';
import { configuration } from './config';
import { initializeLoggingProducer, log } from './helper';

const {
  redisSenderDB,
  redisReceiverDB,
  redisHost,
  redisPort,
  redisAuth,
  loadFromLocal,
  azureConfig,
  port,
} = configuration;

/**
 * Load all data from the file to Redis
 */
const init = async () => {
  const { logTopic, kafkaEndpoint } = configuration;
  await initializeLoggingProducer(kafkaEndpoint);
  const ILPSourceClient = await initializeRedis(
    redisHost,
    redisPort,
    redisSenderDB,
    redisAuth,
    logTopic,
  );
  const ILPDestinationClient = await initializeRedis(
    redisHost,
    redisPort,
    redisReceiverDB,
    redisAuth,
    logTopic,
  );

  const app = express();

  app.post('/reload', async (req, res) => {
    const historicalData = await loadData(
      ILPSourceClient,
      ILPDestinationClient,
      loadFromLocal,
      azureConfig,
      logTopic,
    );
    if (historicalData) {
      try {
        await insertHistoricalData(
          ILPSourceClient,
          ILPDestinationClient,
          historicalData,
        );
      } catch (e) {
        log(`unable to insert data into redis store: ${e}`, logTopic);
      }
    }
    res.send('Store has been reloaded');
  });

  app.get('/source-ilps', async (req, res) => {
    const data = await getAllKeys(ILPSourceClient, logTopic);
    res.send(data);
  });

  app.get('/destination-ilps', async (req, res) => {
    const data = await getAllKeys(ILPDestinationClient, logTopic);
    res.send(data);
  });

  app.listen(port, () =>
    console.log('Historical Data Store is listening on port ', port),
  );
};

init();
