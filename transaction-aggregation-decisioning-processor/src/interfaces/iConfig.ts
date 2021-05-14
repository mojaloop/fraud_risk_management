export interface IConfig {
  functionName: string;
  port: number;
  redisDB: string;
  redisAuth: string;
  redisHost: string;
  redisPort: number;
  redisConnection: boolean;
  apmServiceName: string;
  apmSecretToken: string;
  apmURL: string;
  dbName: string;
  dbURL: string;
  dbUser: string;
  dbPassword: string;
  graphName: string;
  collectionName: string;
  dev: string;
  transactionRoutingHostname: string;
  transactionRoutingPort: number;
  transactionRoutingPath: string;
}
