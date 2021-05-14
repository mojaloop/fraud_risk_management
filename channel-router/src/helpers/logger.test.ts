import { configuration } from '../config';
import { LoggerService } from './logger';

const loggerSource = configuration.functionName;
const getTestRegex = (
  msg: string,
  type: 'TRACE' | 'INFO' | 'ERROR' | 'WARN',
  operation = '',
) =>
  new RegExp(
    `\\[\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}\\]\\[${loggerSource}${
      operation ? ' - ' + operation : operation
    }\\]\\[${type}\\] - ${msg}`,
  );

const fixErrorStackRegex = (msg: string) =>
  msg
    .replace(/\\/gm, () => '\\\\')
    .replace(/\(/gm, () => '\\(')
    .replace(/\)/gm, () => '\\)')
    .replace(/\n/gm, () => '\\n');

describe('Logger Service', () => {
  let consoleTraceSpy: jest.SpyInstance;
  let consoleLoggerSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleTraceSpy = jest.spyOn(console, 'trace').mockImplementation();
    consoleLoggerSpy = jest.spyOn(console, 'log').mockImplementation();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  describe('Trace', () => {
    it('should trace a message with defaults', async () => {
      const expectedMessage = 'ExpectedTraceMessage';
      await LoggerService.trace(expectedMessage);
      const measuredArgs = consoleTraceSpy.mock.calls[0][0];
      //   expect(measuredArgs).toMatch(getTestRegex(expectedMessage, 'WARN'));
    });

    it('should trace a message with defined operation', async () => {
      const expectedMessage = 'ExpectedTraceMessage';
      const operation = 'TestService';
      await LoggerService.warn(expectedMessage, operation);
      const measuredArgs = consoleTraceSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(
        getTestRegex(expectedMessage, 'TRACE', operation),
      );
    });
  });

  describe('Log', () => {
    it('should log a message with defaults', async () => {
      const expectedMessage = 'ExpectedLogMessage';
      await LoggerService.log(expectedMessage);
      const measuredArgs = consoleLoggerSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(getTestRegex(expectedMessage, 'INFO'));
    });

    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedLogMessage';
      const operation = 'TestService';
      await LoggerService.log(expectedMessage, operation);
      const measuredArgs = consoleLoggerSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(
        getTestRegex(expectedMessage, 'INFO', operation),
      );
    });
  });

  describe('Warn', () => {
    it('should warn a message with defaults', async () => {
      const expectedMessage = 'ExpectedWarnMessage';
      await LoggerService.warn(expectedMessage);
      const measuredArgs = consoleWarnSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(getTestRegex(expectedMessage, 'WARN'));
    });

    it('should log a message with defined operation', async () => {
      const expectedMessage = 'ExpectedWarnMessage';
      const operation = 'TestService';
      await LoggerService.warn(expectedMessage, operation);
      const measuredArgs = consoleWarnSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(
        getTestRegex(expectedMessage, 'WARN', operation),
      );
    });
  });

  describe('Error', () => {
    it('should error a string message with defaults', async () => {
      const expectedMessage = 'ExpectedErrorMessage';
      await LoggerService.error(expectedMessage);
      const measuredArgs = consoleErrorSpy.mock.calls[0][0];
      expect(measuredArgs).toMatch(getTestRegex(expectedMessage, 'ERROR'));
    });

    it('should log a string message with defined operation', async () => {
      const expectedMessage = 'ExpectedWarnMessage';
      const operation = 'TestService';
      await LoggerService.error(expectedMessage, undefined, operation);
      const measuredArgs = consoleErrorSpy.mock.calls[0][0];
      //   expect(measuredArgs).toMatch(
      //     getTestRegex(expectedMessage, 'ERROR', operation),
      //   );
    });

    it('should error a error object message with defaults', async () => {
      const expectedMessage = new Error('ExpectedErrorMessage');
      await LoggerService.error(expectedMessage);
      const measuredArgs = consoleErrorSpy.mock.calls[0][0];

      const messageForRegex = fixErrorStackRegex(
        expectedMessage.stack as string,
      );

      //   expect(expectedMessage.stack).toBeTruthy();
      //   expect(measuredArgs).toMatch(getTestRegex(messageForRegex, 'ERROR'));
    });

    it('should error a error object message with child error', async () => {
      const expectedMessage = new Error('ExpectedErrorMessage');
      await LoggerService.error(expectedMessage);
      const measuredArgs = consoleErrorSpy.mock.calls[0][0];

      const messageForRegex = fixErrorStackRegex(
        expectedMessage.stack as string,
      );

      //   expect(expectedMessage.stack).toBeTruthy();
      //   expect(measuredArgs).toMatch(getTestRegex(messageForRegex, 'ERROR'));
    });

    it('should error a error object message with child error and operation', async () => {
      const expectedMessage = new Error('ExpectedErrorMessage');
      expectedMessage.stack = 'ExpectedErrorMessage';
      const childError = new Error('InnerException');
      childError.stack = 'InnerException';
      const operation = 'TestService';

      await LoggerService.error(expectedMessage, childError, operation);

      const measuredArgs = consoleErrorSpy.mock.calls[0][0];

      let messageForRegex = fixErrorStackRegex(expectedMessage.stack as string);
      const childErrorRegex = fixErrorStackRegex(childError.stack as string);

      messageForRegex = `${messageForRegex}[\\r\\n\\s\\t]{1,}${childErrorRegex}`;

      //   expect(expectedMessage.stack).toBeTruthy();
      //   expect(measuredArgs).toMatch(
      //     getTestRegex(messageForRegex, 'ERROR', operation),
      //   );
    });
  });
});
