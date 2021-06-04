export interface IConfig {
  functionName: string;
  port: number;
  apmLogging: boolean;
  apmServiceName: string;
  apmSecretToken: string;
  apmURL: string;
  dev: string;
  channelMap: string;
}
