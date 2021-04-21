import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfig } from './interfaces/iConfig';

// Load .env file into process.env if it exists. This is convenient for running locally.
dotenv({
  path: path.resolve(__dirname, '../.env.dev'),
});

const configuration: IConfig = {
  dbName: <string>process.env.DATABASE_NAME,
  dbURL: <string>process.env.DATABASE_URL,
  dbUser: <string>process.env.DATABASE_USER,
  dbPassword: <string>process.env.DATABASE_PASSWORD,
  graphName: <string>process.env.GRAPH_NAME,
  debug: !!(<boolean | undefined>process.env.DEBUG),
};

export { configuration };
