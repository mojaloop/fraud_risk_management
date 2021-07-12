import { CustomerCreditTransferInitiation } from './iPain001Transaction';
import { Typology } from './network-map';

export class RuleRequest {
  transaction: CustomerCreditTransferInitiation;
  typologies: Array<Typology>;
  constructor(transaction: CustomerCreditTransferInitiation, typologies: Array<Typology>) {
    this.transaction = transaction;
    this.typologies = typologies;
  }
}
