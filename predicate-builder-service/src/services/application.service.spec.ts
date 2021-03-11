import { Request, Response } from 'express';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { ApplicationService } from './application.service';
import { PredicateBuilderService } from './predicate-builder.service';

describe('Application Service', () => {
  let service: ApplicationService;
  let predicateService: PredicateBuilderService;
  beforeEach(() => {
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
    let consoleErrorSpy: jest.SpyInstance;

    let mockRequest: Request;
    let mockResponse: Response;

    let responseStatusSpy: jest.SpyInstance;
    let responseSendSpy: jest.SpyInstance;

    let predicateExecutionRequest: PredicateExecutionRequest;

    const expectedResponse = 'Processed';

    beforeEach(() => {
      consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      processPredicateSpy = jest
        .spyOn(predicateService, 'ProcessPredicate')
        .mockImplementation(() => expectedResponse);

      predicateExecutionRequest = new PredicateExecutionRequest({
        outputTopic: 'TOPIC',
        data: {},
        predicates: [{
            logicalOperator: LogicalOperator.AND,
            dataPropertyPath: 'asdf',
            operator: Operator.EQUALS,
            value: '',
            not: false
        }],
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

    it('should handle a successful inbound request', () => {
      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(200);
      expect(responseSendSpy).toBeCalledWith(expectedResponse);
    });

    it('should respond with an error when no body was passed', () => {
      const expectedError = new Error(
        'Cannot execute predicate, no predicate execution request was passed.',
      );
      mockRequest.body = undefined;

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).not.toBeCalled();
      expect(consoleErrorSpy).toHaveBeenCalledWith(expectedError);
      expect(responseStatusSpy).toBeCalledWith(400);
      expect(responseSendSpy).toBeCalledWith(expectedError.message);
    });

    it('should handle an error thrown when the predicates are not populated', () => {
      const expectedError = new Error(
        `Failed to parse predicate execution request\nCould not parse request - No predicates were passed.`,
      );
      predicateExecutionRequest.predicates = undefined as any;

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).not.toBeCalled();
      expect(consoleErrorSpy).toHaveBeenCalledWith(expectedError);
      expect(responseStatusSpy).toBeCalledWith(500);
      expect(responseSendSpy).toBeCalledWith(expectedError.message);
    });

    it('should handle an error thrown from predicate execution', () => {
      const expectedError = new Error(
        `Failed to process predicate execution request\nSome error.`,
      );

      processPredicateSpy.mockImplementation(() => {
        throw new Error('Some error.');
      });

      service.executePredicateRequest(mockRequest, mockResponse);

      expect(processPredicateSpy).toBeCalled();
      expect(consoleErrorSpy).toHaveBeenCalledWith(expectedError);
      expect(responseStatusSpy).toBeCalledWith(500);
      expect(responseSendSpy).toBeCalledWith(expectedError.message);
    });
  });
});
