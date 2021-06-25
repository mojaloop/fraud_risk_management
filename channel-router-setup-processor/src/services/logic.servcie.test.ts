import { ExecuteRequest } from '../classes/execute-request';
import { CustomerCreditTransferInitiation } from '../classes/iPain001Transaction';
import { LogicService } from './logic.service';

const getMockRequest = () => {
  let quote = new CustomerCreditTransferInitiation(JSON.parse(`{"GroupHeader":{"InitiatingParty":{"Name":"'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748020"}}}},"PaymentInformation":{"PaymentInformationIdentification":"ABC123","CreditTransferTransactionInformation":{"PaymentIdentification":{"EndToEndIdentification":"asdf1234"},"CreditorAccount":{"Identification":{"Identification":"","Other":{"Identification":"+27723748019","SchemeName":{"Proprietary":"MSISDN"},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748019"}},"Proxy":"","Name":""},"CreditorAgent":{"FinancialInstitutionIdentification":{"ClearingSystemMemberIdentification":{"MemberIdentification":"bank1"}}},"Creditor":{"Name":"'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"1989-07-13","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}}},"Amount":{"InstructedAmount":{},"EquivalentAmount":{"CurrencyOfTransfer":"USD","Amount":123.45}},"SupplementaryData":{"fees.currency":"USD","fees.amount":12.34},"PaymentTypeInformation":{"CategoryPurpose":{"Proprietary":"DEPOSIT"}},"RegulatoryReporting":{"Details":{"Code":"string"}},"RemittanceInformation":{"Structured":{"AdditionalRemittanceInformation":"string"}}},"DebtorAccount":{"Identification":{"Identification":"","Other":{"Identification":"+27723748020","SchemeName":{"Proprietary":"MSISDN"},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"Proxy":"string","Name":""},"DebtorAgent":{"FinancialInstitutionIdentification":{"ClearingSystemMemberIdentification":{"MemberIdentification":"string"}}},"Debtor":{"Name":"'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"1989-07-13","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748020"}}}},"SupplementaryData":{"payee.merchantClassificationCode":"merchCode","payer.merchantClassificationCode":"merchCode","transactionType.initiatorType":"CONSUMER","geoCode.latitude":"string","geoCode.longitude":"string"}}`));
  return quote;
};

describe('Logic Service', () => {
  // let logicServiceExecutePostSpy: jest.SpyInstance;
  // beforeEach(() => {
  //   logicServiceExecutePostSpy = jest.spyOn(LogicService, 'executePost').mockImplementation();
  // });
  let service: LogicService;

  beforeEach(() => {
    service = new LogicService();
  });

  describe('Handle Transaction', () => {
    it('should handle successful request, with a unmatched number', async () => {
      const expectedReq = getMockRequest();

      const result = await service.handleTransactionLegacy(expectedReq);

      expect(result).toEqual(
        `[Channel-Orchestrator][Result][FALSE] Payer and Payee contact number is not the same for transaction ID: ${expectedReq.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification}`,
      );
    });

    it('should handle successful request, with a matched number', async () => {
      const expectedReq = getMockRequest();

      const result = await service.handleTransactionLegacy(expectedReq);

      expect(result).toEqual(
        `[Channel-Orchestrator][Result][TRUE] Payer and Payee contact number is the same for transaction ID: ${expectedReq.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification}`,
      );
    });
  });
});
