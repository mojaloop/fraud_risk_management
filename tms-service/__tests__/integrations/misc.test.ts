import supertest from 'supertest';
import app from '../../src/index';

const server = app.listen();

afterAll(async () => {
  app.terminate();
});

describe('check endpoints', () => {
  const request = supertest(server);

  test('should reject the request with no-exist API endpoint', async () => {
    const testCases = [
      '/healthcheck',
      '/api/what',
      '/api/41-2929',
      '/a/../api/../412929/kasa',
    ];

    for (const path of testCases) {
      const res = await request
        .get(path)
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(404);

      const { status } = res.body;
      expect(status).toBe(undefined);
    }
  });

  test('Health Request should pass', async () => {
    const testCases = [
      '/',
      '/health',
    ];

    for (const path of testCases) {
      const res = await request
        .get(path)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);

      const { status } = res.body;
      expect(status).toBe('UP');
    }
  });

  test('Transaction request on empty body should fail', async () => {
    const testCases = '/monitor/transaction';

    const res = await request
      .post(testCases)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400);
  });

  test('Transaction request on correct body should pass', async () => {
    const testCases = '/monitor/transaction';

    const body = {
      TransactionID: '123e4567-e89b-12d3-a456-426614174000',
      ILPSourceAccountAddress: 'Bank1.MSISDN.2507122015',
      ILPDestinationAccountAddress: 'Bank2.MSISDN.25094672092',
      PayerContactNo: '2507122015',
      PayeeContactNo: '25094672092',
      Amount: '250.40',
      Fee: '250.40',
      Payer: {
        PartyIDType: 'string',
        PersonalIdentifierType: 'string',
        PartyID: 'string',
        PartyName: 'string',
      },
      Payee: {
        PartyName: 'string',
      },
      SourceAccountBalance: '5000.30',
      SourceAccountTransactionLimit: '500',
      SourceAccountDailyLimit: '1500',
      SourceAccountPINDate: '10/10/2010',
      PayerDeviceIMEI: '19283747590379',
      PayerICCID: '39iejdi3948',
      Location: 'Ghana',
      Transaction: {
        AuthenticationType: 'string',
      },
      TransactionType: {
        TransactionScenario: 'string',
        TransactionInitiator: 'string',
        TransactionInitiatorType: 'string',
      },
    };

    const res = await request
      .post(testCases)
      .send(body)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
  });

  test('Transaction request on incorrect value should fail', async () => {
    const testCases = '/monitor/transaction';

    const body = {
      TransactionID: '123e4567-e89b-12d3-a456-426614174000',
      ILPSourceAccountAddress: 'Bank1.MSISDN.2507122015',
      ILPDestinationAccountAddress: 'Bank2.MSISDN.25094672092',
      PayerContactNo: '2507122015a',
      PayeeContactNo: '25094672092',
      Amount: '250.40',
      Fee: '250.40',
      Payer: {
        PartyIDType: 'string',
        PersonalIdentifierType: 'string',
        PartyID: 'string',
        PartyName: 'string',
      },
      Payee: {
        PartyName: 'string',
      },
      SourceAccountBalance: '5000.30',
      SourceAccountTransactionLimit: '500',
      SourceAccountDailyLimit: '1500',
      SourceAccountPINDate: '10/10/2010',
      PayerDeviceIMEI: '19283747590379',
      PayerICCID: '39iejdi3948',
      Location: 'Ghana',
      Transaction: {
        AuthenticationType: 'string',
      },
      TransactionType: {
        TransactionScenario: 'string',
        TransactionInitiator: 'string',
        TransactionInitiatorType: 'string',
      },
    };

    const res = await request
      .post(testCases)
      .send(body)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400);
  });
});
