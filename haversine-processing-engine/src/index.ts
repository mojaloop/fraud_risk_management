import config from './config';
import {
  log,
  createKafkaClient,
  handleKafkaConsumer,
} from './utils';

log('Starting Haversine Engine');

const startKafkaListener = () => {
  try {
    const client = createKafkaClient(config);
    handleKafkaConsumer(config, client);
  } catch (e) {
    log(e);
  }
};

startKafkaListener();
log('Engine started');
