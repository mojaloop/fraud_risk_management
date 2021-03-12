import { FunctionDescription } from '../classes/function-description';
import { NestedPredicate } from '../classes/nested-predicate';
import { Predicate } from '../classes/predicate';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { PredicateExecutionResult } from '../classes/predicate-execution-result';
import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { PredicateBuilderService } from './predicate-builder.service';

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

describe('Predicate Builder Service', () => {
  let dataObject: any;
  let service: PredicateBuilderService;

  beforeEach(() => {
    service = new PredicateBuilderService();
    dataObject = getDataObject();
  });

  describe('Process Predicate', () => {
    it('should call inner functions when executing the predicate', () => {
      const predicates = [getPredicate(), getPredicate()];
      const request = getExecutionRequest(predicates, dataObject);

      const expectedFuncDesc = new FunctionDescription({
        func: 'SomeFunc',
        paths: ['SomePath'],
      });
      const expectedResult = new PredicateExecutionResult(expectedFuncDesc, 'true');

      const buildSpy = jest
        .spyOn(service, 'BuildGroupFunction')
        .mockImplementation(() => expectedFuncDesc);

      const executeSpy = jest
        .spyOn(service, 'ExecutePredicatesFunction')
        .mockImplementation(() => 'true');

      const result = service.ProcessPredicate(request);

      expect(buildSpy).toBeCalledWith(predicates);
      expect(executeSpy).toBeCalledWith(request, expectedFuncDesc);
      expect(result).toEqual(expect.objectContaining(expectedResult));
    });
  });

  describe('Build Group Function', () => {
    it('should loop through predicates passed and call build predicate function for each item', () => {
      const predicates = [getPredicate(), getPredicate(), getPredicate()];
      const expectedFuncDesc = new FunctionDescription({
        func: '&& predicateFunc',
        paths: ['predicatePath'],
      });
      const buildPredicateSpy = jest
        .spyOn(service, 'BuildPredicateFunction')
        .mockImplementation(() => expectedFuncDesc);

      const result = service.BuildGroupFunction(predicates);

      expect(buildPredicateSpy).toBeCalledTimes(3);
      expect(result.func).toBe(
        '(predicateFunc && predicateFunc && predicateFunc)',
      );
      expect(result.paths).toEqual(
        expect.arrayContaining([
          'predicatePath',
          'predicatePath',
          'predicatePath',
        ]),
      );
    });
  });

  describe('Build Predicate Function', () => {
    const expectedPredicateLogic = `1 === 1`;

    let predicateLogicSpy: jest.SpyInstance;

    beforeEach(() => {
      predicateLogicSpy = jest
        .spyOn(service, 'GetPredicateLogic')
        .mockImplementation(() => expectedPredicateLogic);
    });

    it('should build a basic AND predicate', () => {
      const predicate = getPredicate();
      const expectedFuncDesc = new FunctionDescription({
        func: `&& ${expectedPredicateLogic}`,
        paths: [predicate.dataPropertyPath],
      });

      const result = service.BuildPredicateFunction(predicate);

      expect(predicateLogicSpy).toBeCalledWith(
        predicate.operator,
        `data.${predicate.dataPropertyPath}`,
        predicate.value,
        false,
      );
      expect(result).toEqual(expect.objectContaining(expectedFuncDesc));
    });

    it('should build a basic OR predicate', () => {
      const predicate = getPredicate();
      predicate.logicalOperator = LogicalOperator.OR;
      const expectedFuncDesc = new FunctionDescription({
        func: `|| ${expectedPredicateLogic}`,
        paths: [predicate.dataPropertyPath],
      });

      const result = service.BuildPredicateFunction(predicate);

      expect(predicateLogicSpy).toBeCalledWith(
        predicate.operator,
        `data.${predicate.dataPropertyPath}`,
        predicate.value,
        false,
      );
      expect(result).toEqual(expect.objectContaining(expectedFuncDesc));
    });

    it('should build a basic AND predicate, data property path starting with "data."', () => {
      const predicate = getPredicate();
      const expectedPath = 'origin';
      predicate.dataPropertyPath = 'data.' + expectedPath;
      const expectedFuncDesc = new FunctionDescription({
        func: `&& ${expectedPredicateLogic}`,
        paths: [expectedPath],
      });

      const result = service.BuildPredicateFunction(predicate);

      expect(predicateLogicSpy).toBeCalledWith(
        predicate.operator,
        `data.${expectedPath}`,
        predicate.value,
        false,
      );
      expect(result).toEqual(expect.objectContaining(expectedFuncDesc));
    });

    it('should build a predicate with nested predicates being provided with AND logical operator', () => {
      const primaryPredicate = getPredicate();
      const nestedPredicates = [getPredicate(), getPredicate(), getPredicate()];
      primaryPredicate.nestedPredicate = new NestedPredicate({
        logicalOperator: LogicalOperator.AND,
        predicates: nestedPredicates,
      });

      const expectedNestedFuncDesc = new FunctionDescription({
        func: `(${expectedPredicateLogic} && ${expectedPredicateLogic} && ${expectedPredicateLogic})`,
        paths: nestedPredicates.map((p) => p.dataPropertyPath),
      });

      const groupFunctionSpy = jest
        .spyOn(service, 'BuildGroupFunction')
        .mockImplementation(() => expectedNestedFuncDesc);

      const expectedFuncDesc = new FunctionDescription({
        func: `&& (${expectedPredicateLogic} && ${expectedNestedFuncDesc.func})`,
        paths: [primaryPredicate.dataPropertyPath].concat(
          expectedNestedFuncDesc.paths,
        ),
      });

      const result = service.BuildPredicateFunction(primaryPredicate);

      expect(predicateLogicSpy).toBeCalledWith(
        primaryPredicate.operator,
        `data.${primaryPredicate.dataPropertyPath}`,
        primaryPredicate.value,
        false,
      );
      expect(result).toEqual(expect.objectContaining(expectedFuncDesc));
      expect(groupFunctionSpy).toBeCalledTimes(1);
    });

    it('should build a predicate with nested predicates being provided with OR logical operator', () => {
      const primaryPredicate = getPredicate();
      const nestedPredicates = [getPredicate(), getPredicate(), getPredicate()];
      primaryPredicate.nestedPredicate = new NestedPredicate({
        logicalOperator: LogicalOperator.OR,
        predicates: nestedPredicates,
      });

      const expectedNestedFuncDesc = new FunctionDescription({
        func: `(${expectedPredicateLogic} && ${expectedPredicateLogic} && ${expectedPredicateLogic})`,
        paths: nestedPredicates.map((p) => p.dataPropertyPath),
      });

      const groupFunctionSpy = jest
        .spyOn(service, 'BuildGroupFunction')
        .mockImplementation(() => expectedNestedFuncDesc);

      const expectedFuncDesc = new FunctionDescription({
        func: `&& (${expectedPredicateLogic} || ${expectedNestedFuncDesc.func})`,
        paths: [primaryPredicate.dataPropertyPath].concat(
          expectedNestedFuncDesc.paths,
        ),
      });

      const result = service.BuildPredicateFunction(primaryPredicate);

      expect(predicateLogicSpy).toBeCalledWith(
        primaryPredicate.operator,
        `data.${primaryPredicate.dataPropertyPath}`,
        primaryPredicate.value,
        false,
      );
      expect(result).toEqual(expect.objectContaining(expectedFuncDesc));
      expect(groupFunctionSpy).toBeCalledTimes(1);
    });
  });

  describe('Get Predicate Logic', () => {
    it('should build EQUALS operation', () => {
      const expectedResult = `data.name === "john"`;

      const result = service.GetPredicateLogic(
        Operator.EQUALS,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT EQUALS operation', () => {
      const expectedResult = `data.name !== "john"`;

      const result = service.GetPredicateLogic(
        Operator.EQUALS,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build GREATERTHAN operation', () => {
      const expectedResult = `data.name > "john"`;

      const result = service.GetPredicateLogic(
        Operator.GREATERTHAN,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT GREATERTHAN operation', () => {
      const expectedResult = `data.name <= "john"`;

      const result = service.GetPredicateLogic(
        Operator.GREATERTHAN,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build GREATERTHANANDEQUALS operation', () => {
      const expectedResult = `data.name >= "john"`;

      const result = service.GetPredicateLogic(
        Operator.GREATERTHANANDEQUALS,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT GREATERTHANANDEQUALS operation', () => {
      const expectedResult = `data.name < "john"`;

      const result = service.GetPredicateLogic(
        Operator.GREATERTHANANDEQUALS,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build LESSTHAN operation', () => {
      const expectedResult = `data.name < "john"`;

      const result = service.GetPredicateLogic(
        Operator.LESSTHAN,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT LESSTHAN operation', () => {
      const expectedResult = `data.name >= "john"`;

      const result = service.GetPredicateLogic(
        Operator.LESSTHAN,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build LESSTHANANDEQUALS operation', () => {
      const expectedResult = `data.name <= "john"`;

      const result = service.GetPredicateLogic(
        Operator.LESSTHANANDEQUALS,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT LESSTHANANDEQUALS operation', () => {
      const expectedResult = `data.name > "john"`;

      const result = service.GetPredicateLogic(
        Operator.LESSTHANANDEQUALS,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build ISNULL operation', () => {
      const expectedResult = `(data.name === null || data.name === undefined)`;

      const result = service.GetPredicateLogic(
        Operator.ISNULL,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT ISNULL operation', () => {
      const expectedResult = `(data.name !== null && data.name !== undefined)`;

      const result = service.GetPredicateLogic(
        Operator.ISNULL,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build CONTAINS operation', () => {
      const expectedResult = `data.name.toString().includes("john")`;

      const result = service.GetPredicateLogic(
        Operator.CONTAINS,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT CONTAINS operation', () => {
      const expectedResult = `!data.name.toString().includes("john")`;

      const result = service.GetPredicateLogic(
        Operator.CONTAINS,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build STARTSWITH operation', () => {
      const expectedResult = `data.name.toString().startsWith("john")`;

      const result = service.GetPredicateLogic(
        Operator.STARTSWITH,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT STARTSWITH operation', () => {
      const expectedResult = `!data.name.toString().startsWith("john")`;

      const result = service.GetPredicateLogic(
        Operator.STARTSWITH,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build ENDSWITH operation', () => {
      const expectedResult = `data.name.toString().endsWith("john")`;

      const result = service.GetPredicateLogic(
        Operator.ENDSWITH,
        'data.name',
        'john',
        false,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should build NOT ENDSWITH operation', () => {
      const expectedResult = `!data.name.toString().endsWith("john")`;

      const result = service.GetPredicateLogic(
        Operator.ENDSWITH,
        'data.name',
        'john',
        true,
      );

      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if operator passed is not a valid operator', () => {
      const operator = 'TEST';
      const expectedErrorMessage = `Failed to build predicate - Operator used ("${operator}") is currently not supported`;

      let resultError: Error | undefined = undefined;
      let result;

      try {
        result = service.GetPredicateLogic(
          operator as any,
          'data.name',
          'john',
          true,
        );
      } catch (error) {
        resultError = error;
      }

      expect(result).toBeFalsy();
      expect(resultError).toBeTruthy();
      expect(resultError?.message).toEqual(expectedErrorMessage);
    });
  });

  describe('Execute Predicates Function', () => {
    let pathValidationSpy: jest.SpyInstance;

    beforeEach(() => {
      pathValidationSpy = jest
        .spyOn(service, 'GetPathValidation')
        .mockImplementation(() => '');
    });

    it('should execute predicate function with defaulted output results, true result', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);
      req.outputIfTrue = undefined;
      const funcDesc = new FunctionDescription({
        func: '1 === 1',
        paths: [predicate.dataPropertyPath],
      });

      const result = service.ExecutePredicatesFunction(req, funcDesc);

      expect(pathValidationSpy).toBeCalledWith(funcDesc.paths);
      expect(result).toEqual('true');
    });

    it('should execute predicate function with defaulted output results, false result', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);
      req.outputIfFalse = undefined;

      const funcDesc = new FunctionDescription({
        func: '1 === 2',
        paths: [predicate.dataPropertyPath],
      });

      const result = service.ExecutePredicatesFunction(req, funcDesc);

      expect(pathValidationSpy).toBeCalledWith(funcDesc.paths);
      expect(result).toEqual('false');
    });

    it('should execute predicate function with set output results, true result', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);
      req.outputIfTrue = 'ThisTestPassed';

      const funcDesc = new FunctionDescription({
        func: '1 === 1',
        paths: [predicate.dataPropertyPath],
      });

      const result = service.ExecutePredicatesFunction(req, funcDesc);

      expect(pathValidationSpy).toBeCalledWith(funcDesc.paths);
      expect(result).toEqual('ThisTestPassed');
    });

    it('should execute predicate function with set output results, false result', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);
      req.outputIfFalse = 'ThisTestFailed';

      const funcDesc = new FunctionDescription({
        func: '1 === 2',
        paths: [predicate.dataPropertyPath],
      });

      const result = service.ExecutePredicatesFunction(req, funcDesc);

      expect(pathValidationSpy).toBeCalledWith(funcDesc.paths);
      expect(result).toEqual('ThisTestFailed');
    });

    it('should execute predicate function and throw any internal error', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);

      const funcDesc = new FunctionDescription({
        func: 'testObj.currency === 2',
        paths: [predicate.dataPropertyPath],
      });

      let result: string | undefined = undefined;
      let resultError: Error | undefined = undefined;
      try {
        result = service.ExecutePredicatesFunction(req, funcDesc);
      } catch (error) {
        resultError = error;
      }

      expect(pathValidationSpy).toBeCalledWith(funcDesc.paths);
      expect(result).toBeFalsy();
      expect(resultError).toBeTruthy();
      expect(resultError?.message).toEqual(
        `Failed while executing predicate request\ntestObj is not defined`,
      );
    });

    it('should execute predicate function and throw an error if path validation failed', () => {
      const predicate = getPredicate();
      const req = getExecutionRequest([predicate], dataObject);

      pathValidationSpy.mockRestore();

      const funcDesc = new FunctionDescription({
        func: '2 === 2',
        paths: ['user.name'],
      });

      let result: string | undefined = undefined;
      let resultError: Error | undefined = undefined;

      try {
        result = service.ExecutePredicatesFunction(req, funcDesc);
      } catch (error) {
        resultError = error;
      }

      expect(result).toBeFalsy();
      expect(resultError).toBeTruthy();
      expect(resultError?.message).toEqual(
        `Failed while executing predicate request\nData Property Path specified does not exist on the data provided: "data.user"`,
      );
    });
  });

  describe('Get Path Validation', () => {
    const defaultErrorPrefix = `throw new Error('Data Property Path specified does not exist on the data provided: `;
    it('should build error script for un-nested path', () => {
      const paths: string[] = ['transaction'];

      const expectedOutput = `if(!data.hasOwnProperty('transaction')) {\n\t${defaultErrorPrefix}"data.transaction"')\n};`;

      const result = service.GetPathValidation(paths);

      expect(result).toEqual(expectedOutput);
    });

    it('should build error script for nested path', () => {
      const paths: string[] = ['transaction.payer.amount'];

      const expectedOutputPart1 = `if(!data.hasOwnProperty('transaction')) {\n\t${defaultErrorPrefix}"data.transaction"')\n};`;
      const expectedOutputPart2 = `if(!data.transaction.hasOwnProperty('payer')) {\n\t${defaultErrorPrefix}"data.transaction.payer"')\n};`;
      const expectedOutputPart3 = `if(!data.transaction.payer.hasOwnProperty('amount')) {\n\t${defaultErrorPrefix}"data.transaction.payer.amount"')\n};`;

      const expectedOutput = `${expectedOutputPart1}\n\n${expectedOutputPart2}\n\n${expectedOutputPart3}`;

      const result = service.GetPathValidation(paths);

      expect(result).toEqual(expectedOutput);
    });

    it('should build error script for nested path with duplicates', () => {
      const paths: string[] = ['transaction.payer.amount', 'transaction.payer.currency', 'transaction.payer.amount'];

      const expectedOutputPart1 = `if(!data.hasOwnProperty('transaction')) {\n\t${defaultErrorPrefix}"data.transaction"')\n};`;
      const expectedOutputPart2 = `if(!data.transaction.hasOwnProperty('payer')) {\n\t${defaultErrorPrefix}"data.transaction.payer"')\n};`;
      const expectedOutputPart3 = `if(!data.transaction.payer.hasOwnProperty('amount')) {\n\t${defaultErrorPrefix}"data.transaction.payer.amount"')\n};`;
      const expectedOutputPart4 = `if(!data.transaction.payer.hasOwnProperty('currency')) {\n\t${defaultErrorPrefix}"data.transaction.payer.currency"')\n};`;

      const expectedOutput = `${expectedOutputPart1}\n\n${expectedOutputPart2}\n\n${expectedOutputPart3}\n\n${expectedOutputPart4}`;

      const result = service.GetPathValidation(paths);

      expect(result).toEqual(expectedOutput);
    });
  });
});
