import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { NestedPredicate } from './nested-predicate';
import { Predicate } from './predicate';

jest.mock('./nested-predicate');

describe('Predicate', () => {
  beforeEach(() => {
    // Clears the calls made to the mock
    (NestedPredicate as any).mockClear();
  });

  it('should create a predicate successfully', () => {
    const predicate = new Predicate({
      logicalOperator: LogicalOperator.AND,
      dataPropertyPath: 'asdf',
      operator: Operator.EQUALS,
      not: false,
    });

    expect(predicate).toBeTruthy();
    expect(predicate.dataPropertyPath).toBe('asdf');
    expect(predicate.logicalOperator).toBe(LogicalOperator.AND);
    expect(predicate.operator).toBe(Operator.EQUALS);
    expect(predicate.not).toBeFalsy();
    expect(NestedPredicate).not.toBeCalled();
  });

  it('should create a predicate with nested predicate successfully', () => {
    const predicate = new Predicate({
      logicalOperator: LogicalOperator.AND,
      dataPropertyPath: 'asdf',
      operator: Operator.EQUALS,
      not: false,
      nestedPredicate: {
        logicalOperator: LogicalOperator.AND,
        predicates: [
          {
            logicalOperator: LogicalOperator.AND,
            dataPropertyPath: 'asdf',
            operator: Operator.EQUALS,
            not: false,
            value: '',
          },
        ],
      },
    });

    expect(predicate).toBeTruthy();
    expect(predicate.dataPropertyPath).toBe('asdf');
    expect(predicate.logicalOperator).toBe(LogicalOperator.AND);
    expect(predicate.operator).toBe(Operator.EQUALS);
    expect(predicate.not).toBeFalsy();
    expect(NestedPredicate).toBeCalledTimes(1);
  });


  it('should create a predicate without nested predicate if nested predicate does not contain values', () => {
    const predicate = new Predicate({
      logicalOperator: LogicalOperator.AND,
      dataPropertyPath: 'asdf',
      operator: Operator.EQUALS,
      not: false,
      nestedPredicate: {
        logicalOperator: LogicalOperator.AND,
        predicates: [],
      },
    });

    expect(predicate).toBeTruthy();
    expect(predicate.dataPropertyPath).toBe('asdf');
    expect(predicate.logicalOperator).toBe(LogicalOperator.AND);
    expect(predicate.operator).toBe(Operator.EQUALS);
    expect(predicate.not).toBeFalsy();
    expect(NestedPredicate).not.toBeCalled();
  });

  it('should throw an error if logical operation is not AND or OR', () => {
    let receivedError: Error | undefined = undefined;
    let predicate: Predicate | undefined = undefined;

    try {
      predicate = new Predicate({
        logicalOperator: 'ASDF' as any,
        dataPropertyPath: 'asdf',
        operator: Operator.EQUALS,
        not: false,
      });
    } catch (error) {
      receivedError = error;
    }

    expect(predicate).toBeFalsy();
    expect(NestedPredicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not create predicate - Logical operator was not passed`,
    );
  });

  it('should throw an error if operation is not a valid Operation', () => {
    let receivedError: Error | undefined = undefined;
    let predicate: Predicate | undefined = undefined;

    try {
      predicate = new Predicate({
        logicalOperator: LogicalOperator.AND,
        dataPropertyPath: 'asdf',
        operator: `ASDF` as any,
        not: false,
      });
    } catch (error) {
      receivedError = error;
    }

    expect(predicate).toBeFalsy();
    expect(NestedPredicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not create predicate - Operator was not passed`,
    );
  });

  it('should throw an error if data property path was not passed', () => {
    let receivedError: Error | undefined = undefined;
    let predicate: Predicate | undefined = undefined;

    try {
      predicate = new Predicate({
        logicalOperator: LogicalOperator.AND,
        dataPropertyPath: undefined,
        operator: Operator.EQUALS,
        not: false,
      });
    } catch (error) {
      receivedError = error;
    }

    expect(predicate).toBeFalsy();
    expect(NestedPredicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not create predicate - Data Property Path was not passed`,
    );
  });
});
