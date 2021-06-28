class Typology {
  name: string;
  endpoint: string;

  constructor(name: string, endpoint: string) {
    this.name = name;
    this.endpoint = endpoint;
  }
}

class Rule {
  ruleName: string;
  ruleEndpoint: string;
  typologies: Array<Typology>;

  constructor(ruleName: string, ruleEndpoint: string, typologies: Array<Typology>) {
    this.ruleName = ruleName;
    this.ruleEndpoint = ruleEndpoint;
    this.typologies = typologies;
  }
}

class TypologyMap {
  typologyName: string;
  typologyEndpoint: string;
  rules: Rule[];

  constructor(typologyName: string, typologyEndpoint: string, rules: Rule[]) {
    this.typologyName = typologyName;
    this.typologyEndpoint = typologyEndpoint;
    this.rules = rules;
  }
}

export { TypologyMap, Rule, Typology };
