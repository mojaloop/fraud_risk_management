/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  port: number;
  nifiHost: string,
  nifiPort: number,
  nifiRoute: string
}

const config: ConfigObj = {
  port: parseInt(process.env.PORT!, 10) || 3000,
  nifiHost: <string>process.env.NIFI_HOST!,
  nifiPort: parseInt(process.env.NIFI_PORT!, 10) || 3000,
  nifiRoute: <string>process.env.NIFI_ROUTE!,
};

export { config, ConfigObj };
