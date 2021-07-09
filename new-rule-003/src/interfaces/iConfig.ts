export interface IConfig {
  redisDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  grpcPort: number;
  logstashHost: string;
  logstashPort: number;
  networkMap: string;
  functionName: string;
  typologyEndpoint: string;
  apmLogging: boolean;
  apmSecretToken: string;
  apmURL: string;
  dev: string;
  dbURL: string,
  dbName: string,
  dbUser: string,
  dbPassword: string,
  graphName: string,
  collectionName: string
}
