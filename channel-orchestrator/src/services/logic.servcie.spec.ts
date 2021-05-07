import { ExecuteRequest } from '../classes/execute-request';
import { LogicService } from './logic.service';

jest.mock('./redis-client.service.ts');

const getMockRequest = () => {
  return new ExecuteRequest({
    TransactionID: 'SOMEGUID',
    PayerContactNo: '0828288546',
    PayeeContactNo: '0793456891',
  });
};

describe('Logic Service', () => {
  let service: LogicService;

  beforeEach(() => {
    service = new LogicService();
  });

  it('should initialize the redis client service', () => {
    expect(service.redisClient).toBeTruthy();
  });

  describe('Handle Transaction', () => {
    it('should handle successful request', async () => {
      const expectedReq = getMockRequest();
      expectedReq.PayeeContactNo = expectedReq.PayerContactNo;

      const result = await service.handleTransaction(expectedReq);

      expect(result).toEqual(
        `[ChannelOrchestrator][Result] 2 rules initiated for transaction ID: ${expectedReq.TransactionID}`,
      );
    });
  });
});
