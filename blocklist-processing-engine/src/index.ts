//START UP FILE
import { configuration } from './config/config';
import { initializeConsumer, createKafkaConsumer } from './consumers';
import { initializeRedis } from './redis-client/redis-client';

initializeRedis().then(async () => {
    await initializeConsumer();
    configuration.topics.forEach(topic => {
        createKafkaConsumer(topic, configuration);
    });
});