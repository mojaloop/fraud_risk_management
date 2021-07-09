import { getTMSResponse } from "./app";


describe('tms end point test', () => {
    it('Send Json Data and check results', async () => {
        const res = await getTMSResponse();
        expect(res).toBeTruthy();
      //  expect(res.code).toEqual(200);
    })

});
