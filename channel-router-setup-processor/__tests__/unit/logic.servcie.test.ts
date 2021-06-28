import { Metadata, sendUnaryData } from '@grpc/grpc-js';
import { ServerErrorResponse, ServerStatusResponse } from '@grpc/grpc-js/build/src/server-call';
import { ExecuteRequest } from '../../src/classes/execute-request';
import { CustomerCreditTransferInitiation } from '../../src/classes/iPain001Transaction';
import { config } from '../../src/config';
import { FlowFileReply } from '../../src/models/nifi_pb';
import { handleTransaction } from '../../src/services/logic.service';

const getMockRequest = () => {
  const quote = new CustomerCreditTransferInitiation(
    JSON.parse(
      '{"GroupHeader":{"InitiatingParty":{"Name":"\'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748020"}}}},"PaymentInformation":{"PaymentInformationIdentification":"ABC123","CreditTransferTransactionInformation":{"PaymentIdentification":{"EndToEndIdentification":"asdf1234"},"CreditorAccount":{"Identification":{"Identification":"","Other":{"Identification":"+27723748019","SchemeName":{"Proprietary":"MSISDN"},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748019"}},"Proxy":"","Name":""},"CreditorAgent":{"FinancialInstitutionIdentification":{"ClearingSystemMemberIdentification":{"MemberIdentification":"bank1"}}},"Creditor":{"Name":"\'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"1989-07-13","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}}},"Amount":{"InstructedAmount":{},"EquivalentAmount":{"CurrencyOfTransfer":"USD","Amount":123.45}},"SupplementaryData":{"fees.currency":"USD","fees.amount":12.34},"PaymentTypeInformation":{"CategoryPurpose":{"Proprietary":"DEPOSIT"}},"RegulatoryReporting":{"Details":{"Code":"string"}},"RemittanceInformation":{"Structured":{"AdditionalRemittanceInformation":"string"}}},"DebtorAccount":{"Identification":{"Identification":"","Other":{"Identification":"+27723748020","SchemeName":{"Proprietary":"MSISDN"},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"Proxy":"string","Name":""},"DebtorAgent":{"FinancialInstitutionIdentification":{"ClearingSystemMemberIdentification":{"MemberIdentification":"string"}}},"Debtor":{"Name":"\'ABDAL-MALIK","Identification":{"Identification":"","Other":{"Identification":"","SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"2021-06-25","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":""}},"SchemeName":{"Proprietary":""},"PrivateIdentification":{"DateAndPlaceOfBirth":{"Birthdate":"1989-07-13","ProvinceOfBirth":"Uknown","CityOfBirth":"","CountryOfBirth":"ZAR"}},"ContactDetails":{"MobileNumber":"+277-23748020"}}}},"SupplementaryData":{"payee.merchantClassificationCode":"merchCode","payer.merchantClassificationCode":"merchCode","transactionType.initiatorType":"CONSUMER","geoCode.latitude":"string","geoCode.longitude":"string"}}',
    ),
  );
  return quote;
};

describe('Logic Service', () => {
  // let logicServiceExecutePostSpy: jest.SpyInstance;
  // beforeEach(() => {
  //   logicServiceExecutePostSpy = jest.spyOn(LogicService, 'executePost').mockImplementation();
  // });

  describe('Handle Legacy Transaction', () => {
    it('should handle successful request, with a unmatched number', async () => {
      const expectedReq = getMockRequest();
      let test = false;
      config.networkMap =
        '{"transactions":[{"transaction_type":"pain.001.001.11","transaction_name":"CustomerCreditTransferInitiationV11","channels":[{"channel_id":"UUIDv4","channel_name":"Fraud","typologies":[{"typology_id":"UUIDv4","typology_name":"Typology_28","typology_version":"1.1","rules":[{"rule_id":"UUIDv4","rule_name":"001_Derived_account_age_payee","rule_version":"1.5"},{"rule_id":"UUIDv4","rule_name":"002_Velocity_incoming","rule_version":"1.2"},{"rule_id":"UUIDv4","rule_name":"030_New_payee_transfer","rule_version":"1.0"}]},{"typology_id":"UUIDv4","typology_name":"Typology_27","typology_version":"1.0","rules":[{"rule_id":"UUIDv4","rule_name":"018_Exceptionally_large_outgoing_transfer","rule_version":"1.0"},{"rule_id":"UUIDv4","rule_name":"030_New_payee_transfer","rule_version":"1.0"},{"rule_id":"UUIDv4","rule_name":"031_Account_drain_multiple_transactions","rule_version":"1.0"}]}]},{"channel_id":"UUIDv4","channel_name":"AML"}]},{"transaction_type":"pain.013.001.09"},{"transaction_type":"pacs.008.001.10"},{"transaction_type":"pacs.002.001.12"}]}';
      const result = await handleTransaction(expectedReq, () => {
        test = true;
      });

      expect(test).toBeTruthy();
    });

    it('should handle successful request, with a matched number', async () => {
      const expectedReq = getMockRequest();
      let test = false;
      config.networkMap =
        '{"transactions":[{"transaction_type":"pain.001.001.11","transaction_name":"CustomerCreditTransferInitiationV11","channels":[{"channel_id":"UUIDv4","channel_name":"Fraud","typologies":[{"typology_id":"UUIDv4","typology_name":"Typology_28","typology_version":"1.1","rules":[{"rule_id":"UUIDv4","rule_name":"001_Derived_account_age_payee","rule_version":"1.5"},{"rule_id":"UUIDv4","rule_name":"002_Velocity_incoming","rule_version":"1.2"},{"rule_id":"UUIDv4","rule_name":"030_New_payee_transfer","rule_version":"1.0"}]},{"typology_id":"UUIDv4","typology_name":"Typology_27","typology_version":"1.0","rules":[{"rule_id":"UUIDv4","rule_name":"018_Exceptionally_large_outgoing_transfer","rule_version":"1.0"},{"rule_id":"UUIDv4","rule_name":"030_New_payee_transfer","rule_version":"1.0"},{"rule_id":"UUIDv4","rule_name":"031_Account_drain_multiple_transactions","rule_version":"1.0"}]}]},{"channel_id":"UUIDv4","channel_name":"AML"}]},{"transaction_type":"pain.013.001.09"},{"transaction_type":"pacs.008.001.10"},{"transaction_type":"pacs.002.001.12"}]}';
      const result = await handleTransaction(expectedReq, () => {
        test = true;
      });
      expect(test).toBeTruthy();
    });
  });
});
