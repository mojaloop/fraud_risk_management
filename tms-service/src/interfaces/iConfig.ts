export interface IConfig {
  serviceName: string;
  dev: string;
  restport: number;
  grpcport: number;
  nifiHost: string;
  nifiPort: number;
  nifiRoute: string;
  logstashHost: string;
  logstashPort: number;
}
