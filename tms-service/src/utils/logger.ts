/* eslint-disable no-console, @typescript-eslint/keyword-spacing */
import { dirname } from 'path';
import log4js from 'log4js';
import { config } from '../config';

/*
 Sample logstash config:
   udp {
    codec => json
    port => 10001
    queue_size => 2
    workers => 2
    type => myAppType
  }
*/

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

export type Parameter = [unknown?, ...unknown[]];

/**
 * Logger Class
 */
class Logger {
  private readonly rootDir: string = dirname((<NodeModule>require.main).filename);

  log4js = log4js.getLogger();

  constructor() {
    if (process.env.pm_id) {
      this.rootDir = this.rootDir.replace('/dist', '/src');
    }
  }

  public log(...args: Parameter): void {
    args.push(`- ${this.trace()}`);
    this.log4js.log(...args);
  }

  public info(...args: Parameter): void {
    args.push(`- ${this.trace()}`);
    this.log4js.info(...args);
  }

  public warn(...args: Parameter): void {
    args.push(`- ${this.trace()}`);
    this.log4js.warn(...args);
  }

  public error(...args: Parameter): void {
    args.push(`- ${this.trace()}`);
    this.log4js.error(...args);
  }

  private trace(): string {
    const lines: string[] = (<string>new Error().stack).split('\n').slice(1);
    const lineMatch: RegExpMatchArray | null = /at (?:(.+)\s+)?\(?(?:(.+?):(\d+):(\d+)|([^)]+))\)?/.exec(lines[2]);

    if (!lineMatch || lineMatch[2] === null || lineMatch[3] === null) {
      return '';
    }

    const fileName: string = lineMatch[2].split(this.rootDir)[1];
    const line: string = lineMatch[3];

    return `${fileName}:${line}`;
  }
}

export const logger: Logger = new Logger();
