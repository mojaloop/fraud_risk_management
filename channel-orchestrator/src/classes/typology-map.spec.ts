import { TypologyMap, Rule, Typology } from './typology-map';

describe('Typology Map', () => {
    it('should create Rule, Typology and Typology Map', () => {
        const typologies = [new Typology('TestTypology', 'TestEndpoint')];
        const rule: Rule = new Rule('TestRule', 'TestEndpoint', typologies);
        const typologyMap = new TypologyMap('TestTypology', 'TestEndpoint', [rule]);

        expect(typologyMap.rules.length).toEqual(1);
        expect(typologyMap.rules[0].ruleEndpoint).toEqual('TestEndpoint');
        expect(typologyMap.rules[0].ruleName).toEqual('TestRule');
        expect(typologyMap.rules[0].typologies).toEqual(typologies);
        expect(typologyMap.typologyEndpoint).toEqual('TestEndpoint');
        expect(typologyMap.typologyName).toEqual('TestTypology');
    });
});