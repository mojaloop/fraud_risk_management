/* eslint-disable no-console */
import { logger } from '../../src/utils/index';

Date.now = jest.fn(() => new Date(Date.UTC(2021, 5, 14)).valueOf());

describe('Logger Service', () => {
  let consoleLoggerSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLoggerSpy = jest.spyOn(console, 'log').mockImplementation();

    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  describe('Log', () => {
    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedLogMessage';

      logger.log(expectedMessage);
      logger.log(expectedMessage);
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(consoleLoggerSpy).toHaveBeenCalledTimes(2);

      consoleLoggerSpy.mockRestore();
    });
  });

  describe('Warn', () => {
    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedWarnMessage';

      logger.warn(expectedMessage);
      logger.warn(expectedMessage);
      expect(console.warn).toHaveBeenCalledTimes(2);
      expect(consoleWarnSpy).toHaveBeenCalledTimes(2);

      consoleWarnSpy.mockRestore();
    });
  });

  describe('Error', () => {
    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedErrorMessage';

      logger.error(expectedMessage);
      logger.error(expectedMessage);
      expect(console.error).toHaveBeenCalledTimes(2);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(2);

      consoleErrorSpy.mockRestore();
    });
  });
});
