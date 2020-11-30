import { get } from '../../lib/utils';

module.exports = (router: any) => {
  router.get('/parties/MSISDN/:id', async (req: any, res: any) => {
    // TODO: Handle response properly
    let response;
    try {
      const nifiResponse = await get(`/${req.params.id}`, {});
      console.log(nifiResponse);
      response = 201;
    } catch (e) {
      console.log(e);
      response = 500;
    }
    return res.sendStatus(response);
  });
};
