/* eslint-disable no-console */
import { LoggerService } from '../../helpers/logger';

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

      LoggerService.log(expectedMessage);
      LoggerService.log(expectedMessage);
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(consoleLoggerSpy).toHaveBeenCalledTimes(2);

      consoleLoggerSpy.mockRestore();
    });
  });

  describe('Warn', () => {
    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedWarnMessage';

      LoggerService.warn(expectedMessage);
      LoggerService.warn(expectedMessage);
      expect(console.warn).toHaveBeenCalledTimes(2);
      expect(consoleWarnSpy).toHaveBeenCalledTimes(2);

      consoleWarnSpy.mockRestore();
    });
  });

  describe('Error', () => {
    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedErrorMessage';

      LoggerService.error(expectedMessage);
      LoggerService.error(expectedMessage);
      expect(console.error).toHaveBeenCalledTimes(2);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(2);

      consoleErrorSpy.mockRestore();
    });
  });
});
