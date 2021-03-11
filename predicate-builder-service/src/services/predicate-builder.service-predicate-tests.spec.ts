import { Predicate } from '../classes/predicate';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';

const getPredicate = () => {
  return new Predicate({
    logicalOperator: LogicalOperator.AND,
    operator: Operator.EQUALS,
    dataPropertyPath: 'origin',
    value: 'New York',
  });
};

const getExecutionRequest = (predicates: Predicate[], data: any) => {
  return new PredicateExecutionRequest({
    data,
    outputTopic: 'Some Output Topic',
    predicates,
  });
};

const getDataObject = () => ({
  origin: 'New York',
  transaction: {
    currency: 'USD',
    amount: 5000,
    payer: {
      id: '1234',
      location: 'New York',
    },
    payee: {
      id: '5678',
      location: 'Johannesburg',
    },
  },
});

describe('Predicate Builder Service - Predicate Tests', () => {
  it('should 1 to be 1', () => {
    expect(1).toBe(1);
  });
});
