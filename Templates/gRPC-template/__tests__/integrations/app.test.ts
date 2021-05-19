import supertest from 'supertest';
import App from '../../index';

const server = App.listen();

const request = supertest(server);

describe('App exposed on 3000', () => {
  afterAll(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    App.terminate();
  });

  test('should response the request with UP', async () => {
    const routes = ['/health'];

    for (const path of routes) {
      const res = await request.get(path).expect(200);

      const { status } = res.body;
      expect(status).toBe('UP');
    }
  });
});
