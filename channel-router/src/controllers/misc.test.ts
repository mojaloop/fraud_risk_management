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
      request: {
        body: {
          TransactionID: '123',
        },
      },
    };

    const ctxTest = await execute(ctx as Context);

    expect(ctxTest.request.body.result).toMatch(
      '[ChannelRouter][Result] 0 Channels initiated for transaction ID: 123',
    );
  });
});
