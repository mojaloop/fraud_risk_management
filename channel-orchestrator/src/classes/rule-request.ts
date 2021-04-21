import { ITransaction } from '../interfaces/iTransaction';
import { Typology } from './typology-map';

export class RuleRequest {
  transaction: ITransaction;
  typologies: Array<Typology>;
  constructor(transaction: ITransaction, typologies: Array<Typology>) {
    this.transaction = transaction;
    this.typologies = typologies;
  }
}
