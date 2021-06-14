export interface IConfig {
  functionName: string;
  port: number;
  tmsEndpoint: string;
  apmLogging: boolean;
  apmServiceName: string;
  apmSecretToken: string;
  apmURL: string;
  dev: string;
  logstashHost: string;
  logstashPort: number;
}
