import { getOffChannelOrchestrator } from "./app";


describe('PPA end point test', () => {
    it('Send Json Data and check results', async () => {
        const res = await getOffChannelOrchestrator();
        expect(res).toBeTruthy();

    })

});
