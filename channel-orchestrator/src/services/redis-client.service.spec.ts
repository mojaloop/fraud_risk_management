import { RedisClient } from 'redis';
import { config } from '../config';
import { LoggerService } from './logger.service';
import { RedisClientService } from './redis-client.service';

describe('Redis Client Service', () => {
  const configData = config;
  let service: RedisClientService;

  beforeEach(() => {
    service = new RedisClientService();
  });

  it('should initialize the redis client', () => {
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

  describe('Get', () => {
    const expectedResult = 'Some Result';
    let errorSpy: jest.SpyInstance;
    let redisGetSpy: jest.SpyInstance;

    beforeEach(() => {
      errorSpy = jest
        .spyOn(LoggerService, 'error')
        .mockImplementation(() => Promise.resolve());

      redisGetSpy = jest
        .spyOn(service.client, 'GET')
        .mockImplementation((key, cb) => {
          if (cb) {
            cb(null, expectedResult);
          }
          return true;
        });
    });

    it('should query redis with a get based on key and respond with the response', async () => {
      const key = 'SomeKey';
      const result = await service.get(key);

      expect(redisGetSpy).toBeCalledWith(key, expect.anything());
      expect(result).toEqual(expectedResult);
    });

    it('should query redis with a get based on key and respond with empty and handle error on redis error', async () => {
      const key = 'SomeKey';
      const internalError = new Error('InternalError');

      redisGetSpy.mockImplementation((key, cb) => {
        if (cb) {
          cb(internalError);
        }
        return true;
      });

      const result = await service.get(key);

      expect(redisGetSpy).toBeCalledWith(key, expect.anything());
      expect(errorSpy).toBeCalledWith(`Error while getting ${key} from Redis with message:`, internalError, 'RedisClient');
      expect(result).toEqual('');
    });
  });
});
