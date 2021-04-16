import { ITransaction } from './iTransaction';

interface Rule {
  rule: string;
  result: boolean;
}

interface Typology {
  name: string;
  endpoint: string;
}

export interface ITypologies {
  typologies: [Typology];
}

export interface IRequest {
  transaction: ITransaction;
}

export interface IResponse {
  rule?: Rule;
  transaction: ITransaction;
}
