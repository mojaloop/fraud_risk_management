export interface IConfig {
  functionName: string;
  port: number;
  apmLogging: boolean;
  redisConnection: boolean;
  apmServiceName: string;
  apmSecretToken: string;
  apmURL: string;
  dev: string;
}
