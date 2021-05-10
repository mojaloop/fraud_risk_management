import supertest from 'supertest';
import app from '../../index';

const server = app.listen();

afterAll(async () => {
  // eslint-disable-next-line import/no-named-as-default-member
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
      const res = await request.get(path).expect(404);

      const { status } = res.body;
      expect(status).toBe(undefined);
    }
  });
});
