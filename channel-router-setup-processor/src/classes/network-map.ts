
export class Rule {
    rule_id: string = "";
    rule_name: string = "";
    rule_version: string = "";
    typologies: Array<Typology> = [];

    getStrValue(): string {
        return `${this.rule_id}${this.rule_name}${this.rule_version}`;
    }
}

export class Typology {
    typology_id: string = "";
    typology_name: string = "";
    typology_version: string = "";
    rules: Array<Rule> = [];

    constructor(typology_id: string, typology_name: string, typology_version: string) {
        this.typology_id = typology_id;
        this.typology_name = typology_name;
        this.typology_version = typology_version;
    }
}

export class Channel {
    channel_id: string = "";
    channel_name: string = "";
    typologies: Array<Typology> = [];
}

export class Transaction {
    transaction_type: string = "";
    transaction_name: string = "";
    channels: Array<Channel> = [];
}

export class NetworkMap {
    transactions: Array<Transaction> = [];
}