import { RedisClient } from "redis";
import { readFile } from 'fs';
import { configuration } from "../config/config";

const client: RedisClient = new RedisClient({
    db: configuration.redisDB,
    host: configuration.redisHost,
    port: configuration.redisPort,
});

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async () => {
    client.flushall();
    let sampleData: string[] = await loadData();
    await block(sampleData);
}

/**
 * Load all data from the file to Redis
 */
const loadData = (): Promise<string[]> => {
    return new Promise(resolve => {
        readFile('./src/data/BlockedDataNumbers.txt', (error, data) => {
            if (error) {
                console.log('Error while populating sample data with message: \r\n' + error);
                resolve([]);
            }
            else {
                var fileData = data.toString();
                let sampleData = fileData.split('\r\n');
                console.log('Sample data read');
                resolve(sampleData);
            }
        });
    });
}

/**
 * Adds the MSDISDN(s) to the Redis block list.
 * @param msisdn the MSISDN(s) to block
 */
const block = (msisdn: string | string[]): Promise<boolean> => {
    // Append one or multiple members to a set.
    return new Promise(resolve =>
        client.SADD('Blocklist', msisdn, (err, reply) => {
            if (err) {
                console.log('Error while updating Blocklist with message: \r\n' + err);
                resolve(false);
            }
            if (reply) {
                console.log('Redis blocklist updated with ' + reply + ' keys');
                resolve(true);
            }
        }));
}

/**
 * Returns all the MSIDNs currently on the blocklist.
 */
const getAllBlocked = (): Promise<string[]> => {
    return new Promise(resolve =>
        client.SMEMBERS('Blocklist', (err, reply) => {
            if (err) {
                console.log(err);
                resolve([]);
            }
            if (reply) {
                console.log(reply);
                resolve(reply);
            }
        }));
}

/**
 * Checks whether or not the provided MSIDN is on the 
 * blocklist or not. 
 * @param msisdn the MSISDN to check
 */
const isBlocked = (msisdn: string): Promise<number> => {
    return new Promise(resolve => {
        // Determine if a given value is a member of a set.
        client.SISMEMBER('Blocklist', msisdn, (err, reply) => {
            if (err) {
                console.log('Error while getting Blocklist from Redis with message: \r\n' + err);
                resolve(0);
            } else {
                resolve(reply);
            }
        });
    });
}

export {
    initializeRedis,
    isBlocked,
    block
}