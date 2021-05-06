/* eslint-disable @typescript-eslint/no-explicit-any */
import { Database } from 'arangojs';
import { configuration } from '../config';
import { LoggerService } from '../helpers';

export class ArangoDBService {
  client: Database;

  constructor() {
    this.client = new Database({
      url: configuration.dbURL,
      databaseName: configuration.dbName,
      auth: {
        username: configuration.dbUser,
        password: configuration.dbPassword,
      },
    });

    LoggerService.log('✅ ArangoDB connection is ready');
  }

  async query(query: string): Promise<any> {
    try {
      const cycles = await this.client.query(query);

      const results = await cycles.batches.all();

      LoggerService.log(`Query result: ${JSON.stringify(results)}`);

      return results;
    } catch (error) {
      LoggerService.error(
        'Error while executing query from arango with message:',
        error,
        'ArangoDBService',
      );
    }
  }
}
