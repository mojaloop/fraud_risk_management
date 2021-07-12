import { RedisClient } from 'redis';
import { config } from '../config';
import { LoggerService } from './logger.service';

export class RedisClientService {
  client: RedisClient;

  constructor() {
    console.log('Connecting to redis hosted on: ' + config.redisHost);
    this.client = new RedisClient({
      db: config.redisDB,
      host: config.redisHost,
      port: config.redisPort,
      auth_pass: config.redisAuth,
    });
  }

  get(key: string): Promise<string> {
    return new Promise((resolve) => {
      // Get the value of a key.
      this.client.GET(key, (err, reply) => {
        if (err) {
          LoggerService.error(`Error while getting ${key} from Redis with message:`, err, 'RedisClient');
          resolve('');
        } else {
          resolve(reply!);
        }
      });
    });
  }
}
