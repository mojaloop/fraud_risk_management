import { RedisClient } from 'redis';
import { config } from '../config';
import { RedisClientType } from '../enums/redis-client';
import { LoggerService } from './logger.service';

export class RedisClientService {
  receiverClient: RedisClient;
  senderClient: RedisClient;

  constructor() {
    this.senderClient = new RedisClient({
      db: config.redisSenderDB,
      host: config.redisHost,
      port: config.redisPort,
      auth_pass: config.redisAuth,
    });
    this.receiverClient = new RedisClient({
      db: config.redisReceiverDB,
      host: config.redisHost,
      port: config.redisPort,
      auth_pass: config.redisAuth,
    });
  }

  get(clientType: RedisClientType, key: string): Promise<string> {
    const client = this.getClient(clientType);
    return new Promise((resolve) => {
      // Get the value of a key.
      client.GET(key, (err, reply) => {
        if (err) {
          LoggerService.error(
            `Error while getting ${key} from Redis with message:`,
            err,
            'RedisClient',
          );
          resolve('');
        } else {
          resolve(reply!);
        }
      });
    });
  }
  getClient(clientType: RedisClientType) {
    switch (clientType) {
      case RedisClientType.Sender:
        return this.senderClient;
      case RedisClientType.Receiver:
        return this.receiverClient;
      default:
        LoggerService.error(
          `Redis client type not supported. ${clientType}  `
        );
        throw new Error('Redis client type not supported.');
    }
  }
}
