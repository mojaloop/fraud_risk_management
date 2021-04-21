/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
import { ParameterizedContext } from 'koa';
import { IRouterParamContext } from 'koa-router';
import { ExecuteRequest } from '../classes/execute-request';
import { ApplicationService } from './application.service';
import { LoggerService } from './logger.service';

jest.mock('../classes/execute-request');

const getMockRequest = () => {
  return new ExecuteRequest({
    TransactionID: 'SOMEGUID',
    PayerContactNo: '0828288546',
    PayeeContactNo: '0793456891',
  });
};

describe('Application Service', () => {
  let service: ApplicationService;

  beforeEach(() => {
    service = new ApplicationService();
  });

  describe('Get Online', () => {
    it('should handle a online get request', async () => {
      const expectedLog = 'Received Online Request - Status: Online';
      const ctx = {
        status: 0,
        body: '',
      };

      const loggerSpy = jest
        .spyOn(LoggerService, 'log')
        .mockImplementation(() => Promise.resolve());

      await service.getOnline(
        ctx as ParameterizedContext<any, IRouterParamContext<any, {}>, any>,
      );

      expect(loggerSpy).toBeCalledWith(expectedLog);
      expect(ctx.status).toEqual(200);
      expect(ctx.body).toEqual('frm-rule-003 is online.');
    });
  });

  describe('Execute', () => {
    const expectedResult = 'LogicServiceResult';
    const expectedStartLog = 'Start - Handle execute request';
    const expectedEndLog = 'End - Handle execute request';

    let mockRequest: ExecuteRequest;
    let logSpy: jest.SpyInstance;
    let errorSpy: jest.SpyInstance;
    let logicExecuteSpy: jest.SpyInstance;
    let req: ParameterizedContext<any, IRouterParamContext<any, {}>, any>;

    beforeEach(() => {
      mockRequest = getMockRequest();

      req = {
        status: 0,
        body: '',
        request: {
          body: mockRequest,
        },
      } as ParameterizedContext<any, IRouterParamContext<any, {}>, any>;

      logSpy = jest
        .spyOn(LoggerService, 'log')
        .mockImplementation(() => Promise.resolve());

      errorSpy = jest
        .spyOn(LoggerService, 'error')
        .mockImplementation(() => Promise.resolve());
    });

    it('should successfully process valid request', async () => {
      await service.execute(req);

      expect(logSpy).toHaveBeenCalledWith(expectedStartLog);

      expect(logicExecuteSpy).toHaveBeenCalledWith(
        expect.objectContaining(mockRequest),
      );
      expect(req.status).toEqual(200);
      expect(req.body).toEqual(expectedResult);

      expect(logSpy).toHaveBeenCalledWith(expectedEndLog);
    });

    it('should handle a error thrown when request is parsed', async () => {
      const thrownError = new Error('Internal Error');
      const failedMessage = 'Failed to parse execution request.';

      (ExecuteRequest as jest.Mock<ExecuteRequest>).mockImplementation(() => {
        throw thrownError;
      });

      await service.execute(req);

      expect(logSpy).toHaveBeenCalledWith(expectedStartLog);

      expect(errorSpy).toHaveBeenCalledWith(
        failedMessage,
        thrownError,
        'ApplicationService',
      );
      expect(req.status).toEqual(406);
      expect(req.body).toEqual(`${failedMessage}\r\n${thrownError.message}`);

      expect(logSpy).toHaveBeenCalledWith(expectedEndLog);
    });

    it('should handle a error thrown when request is being processed', async () => {
      const thrownError = new Error('Internal Error');
      const failedMessage = 'Failed to process execution request.';

      logicExecuteSpy.mockImplementation(() => Promise.reject(thrownError));

      await service.execute(req);

      expect(logSpy).toHaveBeenCalledWith(expectedStartLog);

      expect(errorSpy).toHaveBeenCalledWith(
        failedMessage,
        thrownError,
        'ApplicationService',
      );
      expect(req.status).toEqual(500);
      expect(req.body).toEqual(`${failedMessage}\r\n${thrownError.message}`);

      expect(logSpy).toHaveBeenCalledWith(expectedEndLog);
    });
  });
});
