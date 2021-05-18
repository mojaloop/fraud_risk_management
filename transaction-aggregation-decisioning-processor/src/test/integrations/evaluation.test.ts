import supertest from 'supertest';
import { LoggerService } from '../../helpers';
import App from '../../index';
// const redis = require('redis-mock');

// const client = redis.createClient();

const server = App.listen();

const request = supertest(server);

Date.now = jest.fn(() => new Date(Date.UTC(2021, 5, 14)).valueOf());

describe('Evaluation service executed without error', () => {
  afterAll(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    App.terminate();
  });

  test('should reject the request with no-exist API endpoint', async () => {
    const routes = ['/execute'];

    for (const path of routes) {
      const res = await request
        .post(path)
        .send({
          transactionID: 'ExampleTransactionID',
          channelNumber: '1',
          score: 0.8,
        })
        .set('Accept', 'application/json')
        .expect({
          transactionID: 'ExampleTransactionID',
          message: 'Transaction is positive for Fraud/Risk',
          score: 0.8,
        });

      // const { status } = res.body;
    }
  });
});
