import { ApplicationService } from './application.service';
import { Response, Request } from 'express';
import { ITransaction } from '../interfaces/iTransaction';
import { LoggerService } from './logger.service';

function getMockTransaction(): Partial<ITransaction> {
  return {
    PayeeContactNo: '0123456789',
    PayerContactNo: '0123456789',
    TransactionID: 'SomeUUID',
  };
}

describe('Application Service', () => {
  let service: ApplicationService;
  let logSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    service = new ApplicationService();
    logSpy = jest.spyOn(LoggerService, 'log').mockImplementation(() => {});
    errorSpy = jest.spyOn(LoggerService, 'error').mockImplementation(() => {});
  });

  describe('Initialize', () => {
    it('should initialize itself and call initialize on child services', async () => {
      let redisClientSpy = jest
        .spyOn(service.redisClient, 'initializeRedis')
        .mockImplementation(() => Promise.resolve());

      await service.initialize();

      expect(service.initialized).toBeTruthy();
      expect(redisClientSpy).toBeCalledTimes(1);
    });

    it('should handle multiple calls and not call child initialize methods twice', async () => {
      let redisClientSpy = jest
        .spyOn(service.redisClient, 'initializeRedis')
        .mockImplementation(() => Promise.resolve());

      await service.initialize();

      expect(service.initialized).toBeTruthy();

      await service.initialize();

      expect(service.initialized).toBeTruthy();
      expect(redisClientSpy).toBeCalledTimes(1);
    });
  });

  it('should handle get online request', () => {
    const mockResponse = {
      send() {},
    } as Response;

    const sendSpy = jest.spyOn(mockResponse, 'send');

    service.getOnline(mockResponse);

    expect(sendSpy).toBeCalledWith('Block List Rule Engine is online.');
  });

  describe('Execute Block List Rule', () => {
    const expectedErrorPrefix =
      'Error: Cannot execute block list rule engine - ';
    const expectedResult = 'ResultValue';

    let mockRequest: Request;
    let mockResponse: Response;

    let responseStatusSpy: jest.SpyInstance;
    let responseSendSpy: jest.SpyInstance;

    let blockListServiceSpy: jest.SpyInstance;

    beforeEach(() => {
      mockRequest = {
        body: getMockTransaction(),
      } as Request;

      mockResponse = {
        send() {},
        status(int) {
          return mockResponse;
        },
      } as Response;

      responseStatusSpy = jest.spyOn(mockResponse, 'status');
      responseSendSpy = jest.spyOn(mockResponse, 'send');

      blockListServiceSpy = jest
        .spyOn(service.blockListService, 'handleTransactionMessage')
        .mockImplementation(() => Promise.resolve(expectedResult));
    });

    it('should handle a execute request and call Block List Service', async () => {
      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).toBeCalledWith(mockRequest.body);
      expect(responseStatusSpy).toBeCalledWith(200);
      expect(responseSendSpy).toBeCalledWith(expectedResult);
    });

    it('should handle a execute request without a body and throw a exception', async () => {
      const errorDetail = 'Transaction';
      const expectedError = `${expectedErrorPrefix}${errorDetail} was not passed.`;
      mockRequest.body = undefined;

      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).not.toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(406);
      expect(responseSendSpy).toBeCalledWith(expectedError);
      expect(errorSpy).toBeCalledWith(expectedError);
    });

    it('should handle a execute request without a TransactionID and throw a exception', async () => {
      const errorDetail = 'TransactionID';
      const expectedError = `${expectedErrorPrefix}${errorDetail} was not populated.`;
      (mockRequest.body as ITransaction).TransactionID = '';

      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).not.toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(406);
      expect(responseSendSpy).toBeCalledWith(expectedError);
      expect(errorSpy).toBeCalledWith(expectedError);
    });

    it('should handle a execute request without a PayerContactNumber and throw a exception', async () => {
      const errorDetail = 'PayerContactNo';
      const expectedError = `${expectedErrorPrefix}${errorDetail} was not populated.`;
      (mockRequest.body as ITransaction).PayerContactNo = '';

      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).not.toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(406);
      expect(responseSendSpy).toBeCalledWith(expectedError);
      expect(errorSpy).toBeCalledWith(expectedError);
    });

    it('should handle a execute request without a PayeeContactNumber and throw a exception', async () => {
      const errorDetail = 'PayeeContactNo';
      const expectedError = `${expectedErrorPrefix}${errorDetail} was not populated.`;
      (mockRequest.body as ITransaction).PayeeContactNo = '';

      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).not.toBeCalled();
      expect(responseStatusSpy).toBeCalledWith(406);
      expect(responseSendSpy).toBeCalledWith(expectedError);
      expect(errorSpy).toBeCalledWith(expectedError);
    });

    it('should handle a error thrown from Block List Service', async () => {
      const expectedSubError = 'Some Error';
      const expectedError = `Error: Failed to process block list rule engine execution request\n${expectedSubError}`;
      blockListServiceSpy.mockImplementation(() =>
        Promise.reject(new Error(expectedSubError)),
      );

      await service.executeBlockListRule(mockRequest, mockResponse);

      expect(blockListServiceSpy).toBeCalledWith(mockRequest.body);
      expect(responseStatusSpy).toBeCalledWith(500);
      expect(responseSendSpy).toBeCalledWith(expectedError);
      expect(errorSpy).toBeCalledWith(expectedError);
    });
  });
});
