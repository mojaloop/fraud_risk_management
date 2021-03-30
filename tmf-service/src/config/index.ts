/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { config as dotenv } from 'dotenv';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../../.env'),
});

interface ConfigObj {
  port: number;
  env: string;
}

const config: ConfigObj = {
  port: parseInt(process.env.PORT!, 10) || 3000,
  env: process.env.NODE_ENV!,
};

export { config, ConfigObj };
