/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfig } from './interfaces';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env'),
});

const config: IConfig = {
  serviceName: <string>process.env.SERVICE_NAME,
  dev: <string>process.env.NODE_ENV,
  restport: parseInt(process.env.REST_PORT!, 10) || 3000,
  grpcport: parseInt(process.env.GRPC_PORT!, 10) || 50051,
  nifigrpc: process.env.NIFI_GRPC!,
  nifiHost: process.env.NIFI_HOST!,
  nifiPort: parseInt(process.env.NIFI_PORT!, 10) || 3000,
  nifiRoute: process.env.NIFI_ROUTE!,
  logstashHost: <string>process.env.LOGSTASH_HOST,
  logstashPort: parseInt(process.env.LOGSTASH_PORT!, 10),
};

export { config };
