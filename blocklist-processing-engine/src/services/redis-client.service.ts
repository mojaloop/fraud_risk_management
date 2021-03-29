import { RedisClient } from 'redis';
import fs from 'fs';
import { config } from '../config';
import { LoggerService } from './logger.service';

export class RedisClientService {
  client: RedisClient;

  constructor() {
    this.client = new RedisClient({
      db: config.redisDB,
      host: config.redisHost,
      port: config.redisPort,
      auth_pass: config.redisAuth,
    });
  }

  /**
   * Clears Redis, then loads sample data from file, then publishes all to Redis.
   */
  async initializeRedis() {
    this.client.flushdb();
    const sampleData: string[] = await this.loadData();
    await this.block(sampleData);
  }

  /**
   * Load all data from the file to Redis
   */
  async loadData(): Promise<string[]> {
    return new Promise((resolve) => {
      fs.readFile('./src/data/BlockedDataNumbers.txt', (error, data) => {
        if (error) {
          LoggerService.error(
            `Redis: Error while populating sample data with message: \r\n${error}`,
          );
          resolve([]);
        } else {
          const fileData = data.toString();
          const sampleData = fileData.split('\r\n');
          LoggerService.log('Redis: Sample data read');
          resolve(sampleData);
        }
      });
    });
  }

  /**
   * Adds the MSDISDN(s) to the Redis block list.
   * @param msisdn the MSISDN(s) to block
   */
  async block(msisdn: string | string[]): Promise<boolean> {
    if (Array.isArray(msisdn) && msisdn.length === 0) {
      LoggerService.log(`Redis: blocklist was not updated, no values were passed.`);
      return false;
    }

    return new Promise((resolve) =>
      this.client.SADD('Blocklist', msisdn, (err, reply) => {
        if (err) {
          LoggerService.error(
            `Redis: Error while updating Blocklist with message: \r\n${err}`,
          );
          resolve(false);
        }
        if (reply) {
          LoggerService.log(`Redis: blocklist updated with ${reply} keys`);
          resolve(true);
        }
      }),
    );
  }
  /**
   * Checks whether or not the provided MSIDN is on the
   * blocklist or not.
   * @param msisdn the MSISDN to check
   */
  async isBlocked(msisdn: string): Promise<number> {
    return new Promise((resolve) => {
      // Determine if a given value is a member of a set.
      this.client.SISMEMBER('Blocklist', msisdn, (err, reply) => {
        if (err) {
          LoggerService.error(
            `Redis: Error while getting Blocklist from Redis with message: \r\n${err}`,
          );
          resolve(0);
        } else {
          resolve(reply);
        }
      });
    });
  }
}
