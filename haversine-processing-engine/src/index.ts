import { log } from "./utils";
import config from './config';
import createKafkaClient from './consumer';

console.log(config);

log('Starting Haversine Engine');

createKafkaClient(config);
