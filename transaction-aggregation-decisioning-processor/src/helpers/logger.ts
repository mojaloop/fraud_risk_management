/* eslint-disable @typescript-eslint/no-explicit-any, no-console */
import { configuration } from '../config';

const isDebugging =
  configuration.dev === 'development' || configuration.dev === 'test';

export abstract class LoggerService {
  private static source = configuration.functionName;

  private static timeStamp() {
    const dateObj = new Date();

    let date = dateObj.toISOString();
    date = date.substring(0, date.indexOf('T'));

    const time = dateObj.toLocaleTimeString([], { hour12: false });

    return `${date} ${time}`;
  }

  static log(message: string, serviceOperation?: string): Promise<void> | any {
    isDebugging &&
      console.log(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${
          serviceOperation ? ' - ' + serviceOperation : ''
        }][INFO] - ${message}`,
      );
  }

  static warn(message: string, serviceOperation?: string): Promise<void> | any {
    isDebugging &&
      console.warn(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${
          serviceOperation ? ' - ' + serviceOperation : ''
        }][WARN] - ${message}`,
      );
  }

  static error(
    message: string | Error,
    innerError?: Error,
    serviceOperation?: string,
  ): Promise<void> | any {
    let errMessage = typeof message === 'string' ? message : message.stack;

    if (innerError) {
      errMessage += `\r\n${innerError.stack}`;
    }

    isDebugging &&
      console.error(
        `⛔️ [${LoggerService.timeStamp()}][${LoggerService.source}${
          serviceOperation ? ' - ' + serviceOperation : ''
        }][ERROR] - ${errMessage}`,
      );
  }
}
