import { post } from '../../lib/utils';

module.exports = (router: any) => {
  router.post('/transfers', async (req: any, res: any) => {
    // TODO: Handle response properly
    let response;
    try {
      const nifiResponse = await post('/', req.body, { json: true });
      console.log(nifiResponse);
      response = 201;
    } catch (e) {
      console.log(e);
      response = 500;
    }
    return res.sendStatus(response);
  });
};
