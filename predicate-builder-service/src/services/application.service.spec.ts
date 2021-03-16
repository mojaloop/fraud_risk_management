import { Request, Response } from 'express';
import { Producer } from 'kafka-node';
import { FunctionDescription } from '../classes/function-description';
import { Predicate } from '../classes/predicate';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { PredicateExecutionResult } from '../classes/predicate-execution-result';
import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { ApplicationService } from './application.service';
import { KafkaService } from './kafka.service';
import { PredicateBuilderService } from './predicate-builder.service';

require("leaked-handles");

jest.mock('./kafka.service.ts');

describe('Application Service', () => {
  let service: ApplicationService;
  let predicateService: PredicateBuilderService;
  beforeEach(() => {
    (KafkaService as jest.Mock<KafkaService>).mockImplementation(() => {
      return {
        ready: false,
        producer: (undefined as unknown) as Producer,
        log: () => Promise.resolve(),
        publishResult: () => Promise.resolve(),
      };
    });

    service = new ApplicationService();
    predicateService = service.predicateBuilderService;
  });

  it('should create a predicate builder service', () => {
    expect(service.predicateBuilderService).toBeDefined();
    expect(
      service.predicateBuilderService instanceof PredicateBuilderService,
    ).toBeTruthy();
  });

  it('should respond to getOnline request', () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      send() {},
    } as Response;

    const sendSpy = jest.spyOn(mockResponse, 'send');

    service.getOnline(mockRequest, mockResponse);

    expect(sendSpy).toBeCalledWith('Predicate Builder Service is online.');
  });

  describe('Execute Predicate Request', () => {
    let processPredicateSpy: jest.SpyInstance;
    let kafkaLogSpy: jest.SpyInstance;

    let mockRequest: Request;
    let mockResponse: Response;

    let responseStatusSpy: jest.SpyInstance;
    let responseSendSpy: jest.SpyInstance;

    let predicateExecutionRequest: PredicateExecutionRequest;

    const expectedResult = 'Processed';

    beforeEach(() => {
      kafkaLogSpy = jest
        .spyOn(service.kafkaService, 'log')
        .mockImplementation((x, y) => Promise.resolve());

      processPredicateSpy = jest
        .spyOn(predicateService, 'ProcessPredicate')
        .mockImplementation(
          () =>
            new PredicateExecutionResult(
              new FunctionDescription({ func: '', paths: [] }),
              expectedResult,
            ),
        );

      predicateExecutionRequest = new PredicateExecutionRequest({
        outputTopic: 'TOPIC',
        data: {},
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

      mockRequest = {
        body: predicateExecutionRequest,
      } as Request;
      mockResponse = {
        send() {},
        status(int) {
          return mockResponse;
        },
      } as Response;

      responseStatusSpy = jest.spyOn(mockResponse, 'status');
      responseSendSpy = jest.spyOn(mockResponse, 'send');
    });

    it('should handle a successful inbound execute request', () => {
      service.executePredicateRequest(mockRequest, mockResponse);

      expect(kafkaLogSpy).toHaveBeenCalledWith(
        'Debug',
        `Processed inbound request with result:\nPaths: \n[]\n\nFunction: \n\n\nResult: ${expectedResult}`,
      );
      expect(processPredicateSpy).toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(200);
      expect(responseSendSpy).toBeCalledWith(expectedResult);
    });

    it('should handle a successful inbound debug request', () => {
      const expectedResponse = `Paths: \n[]\n\nFunction: \n\n\nResult: ${expectedResult}`;
      service.executePredicateRequest(mockRequest, mockResponse, true);

      expect(kafkaLogSpy).toHaveBeenCalledWith(
        'Debug',
        `Processed inbound request with result:\n${expectedResponse}`,
      );

      expect(processPredicateSpy).toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(200);
      expect(responseSendSpy).toBeCalledWith(expectedResponse);
    });

    it('should respond with an error when no body was passed', () => {
      const expectedError =
        'Cannot execute predicate, no predicate execution request was passed.';
      mockRequest.body = undefined;

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).not.toBeCalled();
      expect(kafkaLogSpy).toHaveBeenCalledWith('Error', expectedError);
      expect(responseStatusSpy).toBeCalledWith(400);
      expect(responseSendSpy).toBeCalledWith(expectedError);
    });

    it('should handle an error thrown when the predicates are not populated', () => {
      const expectedError = `Failed to parse predicate execution request\nCould not parse request - No predicates were passed.`;
      predicateExecutionRequest.predicates = (undefined as unknown) as Predicate[];

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).not.toBeCalled();
      expect(kafkaLogSpy).toHaveBeenCalledWith('Error', expectedError);
      expect(responseStatusSpy).toBeCalledWith(500);
      expect(responseSendSpy).toBeCalledWith(expectedError);
    });

    it('should handle an error thrown from predicate execution', () => {
      const expectedError = `Failed to process predicate execution request\nSome error.`;

      processPredicateSpy.mockImplementation(() => {
        throw new Error('Some error.');
      });

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).toBeCalled();
      expect(kafkaLogSpy).toHaveBeenCalledWith('Error', expectedError);
      expect(responseStatusSpy).toBeCalledWith(500);
      expect(responseSendSpy).toBeCalledWith(expectedError);
    });
  });
});
