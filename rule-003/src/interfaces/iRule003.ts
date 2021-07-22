import { ITransaction } from './iTransaction';

interface Rule {
  rule_id: string;
  rule_version: string;
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

export interface ITransactionInfo {
  _key: string;
  _id: string;
  _from: string;
  _to: string;
  _rev: string;
}
