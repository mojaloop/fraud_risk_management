class Rule {
  ruleName: string;
  ruleEndpoint: string;
  typologies: Map<string, string>;

  constructor(ruleName: string, ruleEndpoint: string, typologies: Map<string, string>) {
    this.ruleName = ruleName;
    this.ruleEndpoint = ruleEndpoint;
    this.typologies = typologies;
  }
}

class TypologyMap {
  typologyName: string;
  typologyEndpoint: string;
  rules: Rule[]

  constructor(typologyName: string, typologyEndpoint: string, rules: Rule[]) {
    this.typologyName = typologyName;
    this.typologyEndpoint = typologyEndpoint;
    this.rules = rules;
  }
}

export { TypologyMap, Rule };