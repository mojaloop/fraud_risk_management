import { Database } from 'arangojs';
import { configuration } from '../config';
import { LoggerService } from './logger.service';

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
  }

  async query(query: string): Promise<string[][] | undefined> {
    try {
      const cycles = await this.client.query(query);

      const results = await cycles.batches.all();

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

// const queryDB = async (
//   sourceMsisdn: string,
//   db: Database,
// ): Promise<string[][]> => {
//   const query = `FOR v, e, p IN 1..3 OUTBOUND
//       "${sourceMsisdn}"
//       GRAPH "${configuration.graphName}"
//       FILTER e._to == "${sourceMsisdn}"
//       RETURN e`;

//   const cycles = await db.query(query);
//   const results = await cycles.batches.all();

//   return results;
// };

// const handleQuoteMessage = async (message: string): Promise<string> => {
//   const jMessage = JSON.parse(message);
//   const txID: string = jMessage.TransactionID;
//   const topic = configuration.topics[0];

//   const sourceMsisdn = `ILPS/${jMessage.FSPIOPSource}.msisdn.${jMessage.Payer.PartyID}`;

//   //   const db = new Database({
//   //     url: configuration.dbURL,
//   //     databaseName: configuration.dbName,
//   //     auth: {
//   //       username: configuration.dbUser,
//   //       password: configuration.dbPassword,
//   //     },
//   //   });
//   const results = await queryDB(sourceMsisdn, db);
//   const cycleFound = results.length > 0;
//   const response = `Transaction: ${txID} ${
//     cycleFound ? '' : 'Not '
//   }Transacting between parties`;

//   return response;
// };
