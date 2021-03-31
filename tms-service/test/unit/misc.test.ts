import { Context } from 'koa';
import { healthcheck, monitorTransaction } from '../../src/controllers/misc';

describe('test misc functions', () => {
  test('should healtcheck return UP', () => {
    const ctx = {
      body: {
        status: 'DOWN',
      },
    };

    const ctxTest = healthcheck(ctx as Context);

    expect(ctxTest.body).toMatchObject({
      status: 'UP',
    });
  });

  test('should monitorTransaction result is VALID', () => {
    const ctx = {
      body: {
        result: 'Transaction is not valid',
      },
    };

    const ctxTest = monitorTransaction(ctx as Context);

    expect(ctxTest.body).toMatchObject({
      result: 'Transaction is valid',
    });
  });
});
