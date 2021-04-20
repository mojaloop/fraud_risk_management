import { ITransaction } from '../interfaces/iTransaction';

export class RuleRequest {
  transaction: ITransaction;
  typologies: Map<string, string>;
  constructor(transaction: ITransaction, typologies: Map<string, string>) {
    this.transaction = transaction;
    this.typologies = typologies;
  }
}
