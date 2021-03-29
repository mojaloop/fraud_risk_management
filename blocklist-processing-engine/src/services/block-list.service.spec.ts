import { RedisClient } from 'redis';
import { ITransaction } from '../interfaces/iTransaction';
import { BlockListService } from './block-list.service';
import { RedisClientService } from './redis-client.service';

jest.mock('./redis-client.service.ts');

function getMockTransaction(): Partial<ITransaction> {
  return {
    PayeeContactNo: '01234',
    PayerContactNo: '09876',
    TransactionID: 'SomeUUID',
  };
}

describe('Block List Service', () => {
  let redisMock: RedisClientService;
  let service: BlockListService;

  beforeEach(() => {
    (RedisClientService as jest.Mock<RedisClientService>).mockImplementation(
      () => {
        return {
          block: () => Promise.resolve(true),
          client: {} as RedisClient,
          initializeRedis: () => Promise.resolve(undefined),
          isBlocked: () => Promise.resolve(0),
          loadData: () => Promise.resolve([]),
        };
      },
    );
    redisMock = new RedisClientService();

    service = new BlockListService(redisMock);
  });

  describe('Handle Transaction Message', () => {
    it('should orchestrate the inner service functions to provide a result', async () => {
      const tran = getMockTransaction();
      const expectedPayerMSISDN = '+2331234';
      const expectedPayeeMSISDN = '+2339876';

      const expectedPayerResult = '[Payer Result]';
      const expectedPayeeResult = '[Payee Result]';

      const sanatizeSpy = jest
        .spyOn(service, 'sanitizeNumber')
        .mockImplementationOnce(() => expectedPayerMSISDN)
        .mockImplementationOnce(() => expectedPayeeMSISDN);

      const checkIfBlockedSpy = jest
        .spyOn(service, 'checkIfBlocked')
        .mockImplementationOnce(() => Promise.resolve(expectedPayerResult))
        .mockImplementationOnce(() => Promise.resolve(expectedPayeeResult));

      const result = await service.handleTransactionMessage(
        tran as ITransaction,
      );

      expect(result).toEqual(`${expectedPayerResult}\n${expectedPayeeResult}`);
      expect(sanatizeSpy).toBeCalledTimes(2);
      expect(sanatizeSpy.mock.calls).toEqual([
        [tran.PayerContactNo],
        [tran.PayeeContactNo],
      ]);
      expect(checkIfBlockedSpy).toBeCalledTimes(2);
      expect(checkIfBlockedSpy.mock.calls).toEqual([
        [expectedPayerMSISDN, tran.TransactionID],
        [expectedPayeeMSISDN, tran.TransactionID, false],
      ]);
    });
  });

  describe('Sanatize Number', () => {
    const code = `+233`;

    it('should add the county code to the number that starts with a 0', () => {
      const number = '0123456789';
      const expectedNumber = `${code}123456789`;

      const result = service.sanitizeNumber(number);

      expect(result).toEqual(expectedNumber);
    });

    it('should add the + sign to the county code if the number does not start with a 0', () => {
      const number = '233123456789';
      const expectedNumber = `${code}123456789`;

      const result = service.sanitizeNumber(number);

      expect(result).toEqual(expectedNumber);
    });

    it('should just return the number if the number starts with a + sign and does not start with a 0', () => {
      const number = '+233123456789';
      const expectedNumber = `${code}123456789`;

      const result = service.sanitizeNumber(number);

      expect(result).toEqual(expectedNumber);
    });
  });

  describe('Check If Blocked', () => {
    let redisBlockedSpy: jest.SpyInstance;

    beforeEach(() => {
      redisBlockedSpy = jest.spyOn(service.redisClientService, 'isBlocked');
    });

    it('should determine if payer (default) is blocked, blocked is false', async () => {
      const tran: ITransaction = getMockTransaction() as ITransaction;

      redisBlockedSpy.mockImplementation((msisdn) => Promise.resolve(0));

      const result = await service.checkIfBlocked(
        tran.PayerContactNo,
        tran.TransactionID,
      );

      expect(result).toEqual(
        `[BLOCKLIST][Payer blocked false] TransactionID: ${tran.TransactionID} MSISDN: ${tran.PayerContactNo} is not blocked`,
      );
      expect(redisBlockedSpy).toBeCalledWith(tran.PayerContactNo);
    });

    it('should determine if payee is blocked, blocked is false', async () => {
      const tran: ITransaction = getMockTransaction() as ITransaction;

      redisBlockedSpy.mockImplementation((msisdn) => Promise.resolve(0));

      const result = await service.checkIfBlocked(
        tran.PayeeContactNo,
        tran.TransactionID,
        false
      );

      expect(result).toEqual(
        `[BLOCKLIST][Payee blocked false] TransactionID: ${tran.TransactionID} MSISDN: ${tran.PayeeContactNo} is not blocked`,
      );
      expect(redisBlockedSpy).toBeCalledWith(tran.PayeeContactNo);
    });

    it('should determine if payer (default) is blocked, blocked is true', async () => {
      const tran: ITransaction = getMockTransaction() as ITransaction;

      redisBlockedSpy.mockImplementation((msisdn) => Promise.resolve(1));

      const result = await service.checkIfBlocked(
        tran.PayerContactNo,
        tran.TransactionID,
      );

      expect(result).toEqual(
        `[BLOCKLIST][Payer blocked true] TransactionID: ${tran.TransactionID} MSISDN: ${tran.PayerContactNo} is blocked`,
      );
      expect(redisBlockedSpy).toBeCalledWith(tran.PayerContactNo);
    });

    it('should determine if payee is blocked, blocked is true', async () => {
      const tran: ITransaction = getMockTransaction() as ITransaction;

      redisBlockedSpy.mockImplementation((msisdn) => Promise.resolve(1));

      const result = await service.checkIfBlocked(
        tran.PayeeContactNo,
        tran.TransactionID,
        false
      );

      expect(result).toEqual(
        `[BLOCKLIST][Payee blocked true] TransactionID: ${tran.TransactionID} MSISDN: ${tran.PayeeContactNo} is blocked`,
      );
      expect(redisBlockedSpy).toBeCalledWith(tran.PayeeContactNo);
    });
  });
});
