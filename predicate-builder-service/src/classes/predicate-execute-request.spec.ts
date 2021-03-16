import { Predicate } from './predicate';
import { PredicateExecutionRequest } from './predicate-execute-request';

require('leaked-handles');

jest.mock('./predicate');

describe('Predicate Execution Request', () => {
  beforeEach(() => {
    // Clears the calls made to the mock
    (Predicate as jest.Mock<Predicate>).mockClear();
  });

  it('should create a nested predicate successfully with defaulted values', () => {
    const init = {
      predicates: [{} as Predicate],
      outputTopic: 'TOPIC',
      data: {},
    };

    const expectedResult = new PredicateExecutionRequest(init);

    expect(expectedResult).toBeTruthy();
    expect(expectedResult.outputTopic).toBe('TOPIC');
    expect(expectedResult.outputIfFalse).toBe('false');
    expect(expectedResult.outputIfTrue).toBe('true');

    expect(Predicate).toBeCalledTimes(1);
  });

  it('should throw an error if output topic was not passed', () => {
    const init = {
      predicates: [{} as Predicate],
      data: {},
    };

    let expectedResult: PredicateExecutionRequest | undefined = undefined;
    let receivedError: Error | undefined;

    try {
      expectedResult = new PredicateExecutionRequest(init);
    } catch (error) {
      receivedError = error;
    }

    expect(expectedResult).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not parse request - No output topic was passed`,
    );
  });

  it('should throw an error if no data was passed', () => {
    const init = {
      outputTopic: 'TOPIC',
      predicates: [{} as Predicate],
    };

    let expectedResult: PredicateExecutionRequest | undefined = undefined;
    let receivedError: Error | undefined;

    try {
      expectedResult = new PredicateExecutionRequest(init);
    } catch (error) {
      receivedError = error;
    }

    expect(expectedResult).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not parse request - No data was passed`,
    );
  });

  it('should throw an error if no predicates were passed', () => {
    const init = {
      outputTopic: 'TOPIC',
      data: {},
    };

    let expectedResult: PredicateExecutionRequest | undefined = undefined;
    let receivedError: Error | undefined;

    try {
      expectedResult = new PredicateExecutionRequest(init);
    } catch (error) {
      receivedError = error;
    }

    expect(expectedResult).toBeFalsy();
    expect(Predicate).not.toBeCalled();

    expect(receivedError).toBeTruthy();
    expect(receivedError?.message).toBe(
      `Could not parse request - No predicates were passed.`,
    );
  });
});
