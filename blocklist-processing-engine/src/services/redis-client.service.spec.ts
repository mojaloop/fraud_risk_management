import { RedisClientService } from './redis-client.service';
import { config } from '../config';
import fs from 'fs';
import { RedisClient } from 'redis';
import { LoggerService } from './logger.service';

describe('Redis Client Service', () => {
  let service: RedisClientService;
  let configData = config;
  let logSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    configData.redisHost = 'jn-some-host-name';
    configData.redisPort = 9376;
    configData.redisAuth = '1234';
    configData.redisDB = 0;

    service = new RedisClientService();

    logSpy = jest.spyOn(LoggerService, 'log').mockImplementation((msg) => {});
    errorSpy = jest
      .spyOn(LoggerService, 'error')
      .mockImplementation((error) => {});
  });

  it('should initialize the redis client service with config', () => {
    const redisOptions = (service.client as Partial<RedisClient> & {
      options: {
        host: string;
        port: number;
        auth_pass: string;
        db: number;
      };
    }).options;

    expect(redisOptions.auth_pass).toBe(configData.redisAuth);
    expect(redisOptions.host).toBe(configData.redisHost);
    expect(redisOptions.port).toBe(configData.redisPort);
    expect(redisOptions.db).toBe(configData.redisDB);
  });

  describe('Initialize Redis', () => {
    it('should call load dummy data from file and should call block function to load into redis', async () => {
      const expectedSampleData = ['1', '2', '3'];

      const flushDBSpy = jest.spyOn(service.client, 'flushdb');
      const loadDataSpy = jest
        .spyOn(service, 'loadData')
        .mockImplementation(() => Promise.resolve(expectedSampleData));
      const blockSpy = jest
        .spyOn(service, 'block')
        .mockImplementation((arg) => Promise.resolve(true));

      await service.initializeRedis();

      expect(flushDBSpy).toBeCalled();
      expect(loadDataSpy).toBeCalled();
      expect(blockSpy).toBeCalledWith(expectedSampleData);
    });
  });

  describe('Load Data', () => {
    const expectedFileContents = '1\r\n2\r\n3\r\n4\r\n5';
    let fsSpy: jest.SpyInstance;

    beforeEach(() => {
      fsSpy = jest
        .spyOn(fs, 'readFile')
        .mockImplementation((path, callback) => {
          callback(null, Buffer.from(expectedFileContents, 'utf8'));
        });
    });

    it('should load the dummy data text file', async () => {
      const expectedFileLocation = './src/data/BlockedDataNumbers.txt';
      const expectedResult = ['1', '2', '3', '4', '5'];
      const result = await service.loadData();

      expect(fsSpy).toBeCalledWith(expectedFileLocation, expect.anything());
      expect(logSpy).toBeCalledWith('Redis: Sample data read');
      expect(result).toEqual(expectedResult);
    });

    it('should handle file read error while attempting to load the dummy data text file', async () => {
      const expectedFileLocation = './src/data/BlockedDataNumbers.txt';
      const expectedError = 'File Not Found';

      fsSpy.mockImplementation((path, callback) => {
        callback(expectedError);
      });

      const result = await service.loadData();

      expect(fsSpy).toBeCalledWith(expectedFileLocation, expect.anything());
      expect(errorSpy).toBeCalledWith(
        `Redis: Error while populating sample data with message: \r\n${expectedError}`,
      );
      expect(result).toEqual([]);
    });

    afterAll(() => {
      fsSpy.mockRestore();
    });
  });

  describe('Block', () => {
    const expectedKey = 'Blocklist';
    let redisSADDSpy: jest.SpyInstance;

    beforeEach(() => {
      redisSADDSpy = jest
        .spyOn(service.client, 'SADD')
        .mockImplementation((key, value, callback) => {
          if (typeof callback !== 'string') {
            const returnCount = Array.isArray(value) ? value.length : 1;

            callback(null, returnCount);
          }

          return true;
        });
    });

    it('should handle multiple MSISDNs being provided', async () => {
      const msisdns = ['1', '2', '3', '4', '5'];

      const result = await service.block(msisdns);

      expect(redisSADDSpy).toBeCalledWith(
        expectedKey,
        msisdns,
        expect.anything(),
      );
      expect(logSpy).toBeCalledWith(
        `Redis: blocklist updated with ${msisdns.length} keys`,
      );
      expect(result).toBeTruthy();
    });

    it('should handle empty collection of MSISDNs being provided', async () => {
      const msisdns: string[] = [];

      const result = await service.block(msisdns);

      expect(redisSADDSpy).not.toBeCalled();
      expect(logSpy).toBeCalledWith(
        `Redis: blocklist was not updated, no values were passed.`,
      );
      expect(result).toBeFalsy();
    });

    it('should handle single string MSISDN being provided', async () => {
      const msisdn: string = 'someid';

      const result = await service.block(msisdn);

      expect(redisSADDSpy).toBeCalledWith(
        expectedKey,
        msisdn,
        expect.anything(),
      );
      expect(logSpy).toBeCalledWith(`Redis: blocklist updated with 1 keys`);
      expect(result).toBeTruthy();
    });

    it('should handle a error being thrown from redis', async () => {
      const err = 'Some Redis Error';
      redisSADDSpy.mockImplementation((key, value, callback) => {
        callback(err, 0);
        return false;
      });

      const msisdn: string = 'someid';

      const result = await service.block(msisdn);

      expect(redisSADDSpy).toBeCalledWith(
        expectedKey,
        msisdn,
        expect.anything(),
      );
      expect(errorSpy).toBeCalledWith(
        `Redis: Error while updating Blocklist with message: \r\n${err}`,
      );
      expect(result).toBeFalsy();
    });
  });

  describe('Block', () => {
    const expectedKey = 'Blocklist';
    let redisSISMEMBERSpy: jest.SpyInstance;

    beforeEach(() => {
      redisSISMEMBERSpy = jest.spyOn(service.client, 'SISMEMBER');
    });

    it('should return 1 if the msisdn was found', async () => {
      const msisdn: string = 'someid';
      redisSISMEMBERSpy.mockImplementation((key, value, callback) => {
        callback(null, 1);

        return true;
      });

      const result = await service.isBlocked(msisdn);

      expect(redisSISMEMBERSpy).toBeCalledWith(
        expectedKey,
        msisdn,
        expect.anything(),
      );
      expect(result).toEqual(1);
    });

    it('should return 0 if the msisdn was found', async () => {
      const msisdn: string = 'someid';
      redisSISMEMBERSpy.mockImplementation((key, value, callback) => {
        callback(null, 0);

        return true;
      });

      const result = await service.isBlocked(msisdn);

      expect(redisSISMEMBERSpy).toBeCalledWith(
        expectedKey,
        msisdn,
        expect.anything(),
      );
      expect(result).toEqual(0);
    });

    it('should return 0 if redis threw an error', async () => {
      const msisdn: string = 'someid';
      const expectedError = 'Failed to find';

      redisSISMEMBERSpy.mockImplementation((key, value, callback) => {
        callback(expectedError);

        return true;
      });

      const result = await service.isBlocked(msisdn);

      expect(redisSISMEMBERSpy).toBeCalledWith(
        expectedKey,
        msisdn,
        expect.anything(),
      );
      expect(errorSpy).toBeCalledWith(
        `Redis: Error while getting Blocklist from Redis with message: \r\n${expectedError}`,
      );
      expect(result).toEqual(0);
    });
  });
});
