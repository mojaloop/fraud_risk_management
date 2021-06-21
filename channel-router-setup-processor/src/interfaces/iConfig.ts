export interface IConfig {
  redisDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  grpcport: number;
  restPort: number;
  logstashHost: string;
  logstashPort: number;
  networkMap: string;
}
