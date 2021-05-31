import { Database } from 'arangojs';
import { ArangoDBService } from '../clients/arangodb';
import { LoggerService } from '../helpers';
import { Welcome8 } from '../models/xml.types';

export async function uploadSanctionData(xml: Welcome8) {
  try {
    let db: Database;
    const adb = new ArangoDBService();
    const dbs = await adb.client.databases();
    if (dbs.some((d) => d.name === 'SanctionData')) db = adb.client.database('SanctionData');
    else db = await adb.client.createDatabase('SanctionData');

    const sanctionDB = db.database('SanctionData');
    const individualCollection = sanctionDB.collection('Individuals');
    const entityCollection = sanctionDB.collection('Entities');

    if (!(await individualCollection.exists())) await individualCollection.create();

    if (!(await entityCollection.exists())) await entityCollection.create();

    const individualSaveRes = await individualCollection.import(xml.CONSOLIDATED_LIST.INDIVIDUALS[0].INDIVIDUAL);
    const entitySaveRes = await entityCollection.import(xml.CONSOLIDATED_LIST.ENTITIES[0].ENTITY);

    LoggerService.log(`Individuals: ${individualSaveRes.created} created, with ${individualSaveRes.errors} duplicates`);
    LoggerService.log(`Entities: ${entitySaveRes.created} created, with ${entitySaveRes.errors} duplicates`);
  } catch (err) {
    LoggerService.error(`Error while saving results to ArangoDB with message: ${err}`);
  }
}
