import { ITransaction } from "../interfaces/iTransaction";

export class RuleRequest {
    transaction: ITransaction;
    typologies: any;
    constructor(transaction: ITransaction, typologies: any) {
        this.transaction = transaction;
        this.typologies = typologies;
    }
}