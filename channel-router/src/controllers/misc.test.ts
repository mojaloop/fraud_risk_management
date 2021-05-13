import { Context } from 'koa';
import { healthcheck, execute } from './misc';

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

  test('should monitorTransaction result is VALID', async () => {
    const ctx = {
      body: {
        result: 'Transaction is not valid',
      },
    };

    const ctxTest = await execute(ctx as Context);

    expect(ctxTest.body).toMatchObject({
      result: 'Transaction is valid',
    });
  });
});
