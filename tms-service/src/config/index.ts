/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  functionName: string;
  port: number;
  nifiHost: string,
  nifiPort: number,
  nifiRoute: string,
  apmLogging: boolean;
  apmServiceName: string;
  apmSecretToken: string;
  apmURL: string;
  dev: string;
}

const config: ConfigObj = {
  functionName: <string>process.env.FUNCTION_NAME,
  port: parseInt(process.env.PORT!, 10) || 3000,
  nifiHost: <string>process.env.NIFI_HOST!,
  nifiPort: parseInt(process.env.NIFI_PORT!, 10) || 3000,
  nifiRoute: <string>process.env.NIFI_ROUTE!,
  apmLogging: <boolean>(process.env.APM_LOGGING === 'true'),
  apmServiceName: <string>process.env.APM_SERVICE_NAME,
  apmSecretToken: <string>process.env.APM_SECRET_TOKEN,
  apmURL: <string>process.env.APM_URL,
  dev: <string>process.env.NODE_ENV,
};

export { config, ConfigObj };
