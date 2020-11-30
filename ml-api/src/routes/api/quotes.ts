import { post } from '../../lib/utils';

module.exports = (router: any) => {
  router.post('/quotes', async (req: any, res: any) => {
    // TODO: Handle response properly
    let response;
    try {
      const nifiResponse = await post('/', req.body, { json: true });
      // eslint-disable-next-line no-console
      console.log(nifiResponse);
      response = 201;
    } catch (e) {
      console.log(e);
      response = 503;
    }

    return res.sendStatus(response);
  });
};
