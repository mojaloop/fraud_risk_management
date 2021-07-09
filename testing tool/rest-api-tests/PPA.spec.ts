import { getPPAResponse } from "./app";
describe('PPA end point test', () => {
    it('Send Json Data and check results', async () => {
        const res = await getPPAResponse();
        expect(res).toBeTruthy();
        expect(res.GroupHeader.InitiatingParty.Name)
            .toEqual("payerfirstName payermiddleName payerlastname");
        expect(res.GroupHeader.InitiatingParty.Identification.ContactDetails.MobileNumber)
            .toEqual('+277-23748020');
        expect(res.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification)
            .toEqual('asdf1234');
    })

});
