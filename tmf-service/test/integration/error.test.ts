import supertest from 'supertest';
import app from '../../src/index';

const server = app.listen();

afterAll(async () => {
  await app.terminate();
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
});
