/* eslint-disable @typescript-eslint/no-explicit-any, no-console */
import { configuration } from '../config';

export abstract class LoggerService {
  private static source = 'frm-rule-002';
  private static timeStamp() {
    const dateObj = new Date();

    let date = dateObj.toISOString();
    date = date.substring(0, date.indexOf('T'));

    const time = dateObj.toLocaleTimeString([], { hour12: false });

    return `${date} ${time}`;
  }

  static log(message: string, serviceOperation?: string): Promise<void> | any {
    configuration.debug &&
      console.log(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${
          serviceOperation ? ' - ' + serviceOperation : ''
        }][INFO] - ${message}`,
      );
  }

  static warn(message: string, serviceOperation?: string): Promise<void> | any {
    configuration.debug &&
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

    configuration.debug &&
      console.error(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${
          serviceOperation ? ' - ' + serviceOperation : ''
        }][ERROR] - ${errMessage}`,
      );
  }
}
