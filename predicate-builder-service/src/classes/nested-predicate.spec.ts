import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { NestedPredicate } from './nested-predicate';
import { Predicate } from './predicate';

jest.mock('./predicate');

describe('Nested Predicate', () => {
  beforeEach(() => {
    // Clears the calls made to the mock
    (Predicate as any).mockClear();
  });

  it('should create a nested predicate successfully', () => {
    const nestedPredicate = new NestedPredicate({
      logicalOperator: LogicalOperator.AND,
      predicates: [
        {
          logicalOperator: LogicalOperator.AND,
          dataPropertyPath: 'asdf',
          operator: Operator.EQUALS,
          value: '',
          not: false,
        },
      ],
    });

    expect(nestedPredicate).toBeTruthy();
    expect(nestedPredicate.logicalOperator).toBe(LogicalOperator.AND);
    expect(Predicate).toBeCalledTimes(1);
  });

  it('should throw an error if logical operation is not AND or OR', () => {
    let receivedError: Error | undefined = undefined;
    let nestedPredicate: NestedPredicate | undefined = undefined;

    try {
      nestedPredicate = new NestedPredicate({
        logicalOperator: 'TEST' as any,
        predicates: [],
      });
    } catch (error) {
      receivedError = error;
    }

    expect(nestedPredicate).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not create nested predicate, logical operator passed is neither a AND or OR`,
    );
  });

  it('should throw an error if predicates passed is object and not array', () => {
    let receivedError: Error | undefined = undefined;
    let nestedPredicate: NestedPredicate | undefined = undefined;

    try {
      nestedPredicate = new NestedPredicate({
        logicalOperator: LogicalOperator.AND,
        predicates: {} as any,
      });
    } catch (error) {
      receivedError = error;
    }

    expect(nestedPredicate).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      'Could not create nested predicate, predicates passed is not an array of predicates',
    );
  });

  it('should throw an error if predicates passed is an empty array', () => {
    let receivedError: Error | undefined = undefined;
    let nestedPredicate: NestedPredicate | undefined = undefined;

    try {
      nestedPredicate = new NestedPredicate({
        logicalOperator: LogicalOperator.AND,
        predicates: [],
      });
    } catch (error) {
      receivedError = error;
    }

    expect(nestedPredicate).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      'Could not create nested predicate, predicates passed is an empty array',
    );
  });
});
