//STARTUP FILE
import { configuration } from './config/config';
import { initializeConsumer, createKafkaConsumer } from './consumers';
import { initializeRedis } from './redis-client/redis-client';

const start = async () => {
    await initializeRedis();
    await initializeConsumer();
    configuration.topics.forEach(topic => {
        createKafkaConsumer(topic, configuration);
    });

}

start();