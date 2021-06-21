/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from '../config';
import log4js from 'log4js';

log4js.configure({
  appenders: {
    logstash: {
      type: '@log4js-node/logstash-http',
      url: `http://${config.logstashHost}:${config.logstashPort}/_bulk`,
      application: 'logstash-log4js',
      logType: 'application',
      logChannel: config.serviceName,
    },
  },
  categories: {
    default: { appenders: ['logstash'], level: 'info' },
  },
});

const logger = log4js.getLogger();

export abstract class LoggerService {
  private static source = config.serviceName;
  public static isDebugging = config.dev === 'dev';

  private static timeStamp() {
    const dateObj = new Date();

    let date = dateObj.toISOString();
    date = date.substring(0, date.indexOf('T'));

    const time = dateObj.toLocaleTimeString([], { hour12: false });

    return `${date} ${time}`;
  }

  static log(message: string, serviceOperation?: string): Promise<void> | any {
    this.isDebugging &&
      logger.info(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${serviceOperation ? ' - ' + serviceOperation : ''}][INFO] - ${message}`,
      );
  }

  static warn(message: string, serviceOperation?: string): Promise<void> | any {
    this.isDebugging &&
      logger.warn(
        `[${LoggerService.timeStamp()}][${LoggerService.source}${serviceOperation ? ' - ' + serviceOperation : ''}][WARN] - ${message}`,
      );
  }

  static error(message: string | Error, innerError?: Error, serviceOperation?: string): Promise<void> | any {
    let errMessage = typeof message === 'string' ? message : message.stack;

    if (innerError) {
      errMessage += `\r\n${innerError.message}`;
    }

    logger.error(
      `[${LoggerService.timeStamp()}][${LoggerService.source}${serviceOperation ? ' - ' + serviceOperation : ''}][ERROR] - ${errMessage}`,
    );
  }
}
