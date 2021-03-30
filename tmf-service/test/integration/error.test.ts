const supertest = require('supertest');
const app = require('../../src/index');

const server = app.listen();

afterAll(async () => {
  await app.terminate();
});


describe('Error', () => {
  const request = supertest(server);

  describe('UNKNOWN_ENDPOINT', () => {
    it('<404> should reject the request with no-exist API endpoint', async () => {
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
});

export {};
