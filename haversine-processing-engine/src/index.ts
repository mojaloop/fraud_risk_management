import { log } from './utils';
import config from './config';
import createKafkaClient from './consumer';

log('Starting Haversine Engine');

createKafkaClient(config);
