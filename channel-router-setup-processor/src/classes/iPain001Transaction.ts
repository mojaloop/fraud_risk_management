/* eslint-disable */
String.prototype.toMobileNumber = function (this: string) {
  if (!this || this.length < 4) return this;
  let toReturn = this.replace('+', '');
  toReturn = `+${toReturn.substr(0, 3)}-${toReturn.substr(3)}`;
  return toReturn;
};

class PaymentIdentification {
  EndToEndIdentification = ''; // transactionId
}

class ContactDetails {
  MobileNumber = ''; // Initiator
}

class DateAndPlaceOfBirth {
  Birthdate: string = new Date().toISOString().split('T')[0];
  ProvinceOfBirth = 'Uknown';
  CityOfBirth = '';
  CountryOfBirth = 'ZAR';
}

class SchemeName {
  Proprietary = ''; // partyIdType
}

class StructuredRegulatoryReporting {
  Code = ''; // balanceOfPayments
}

class CategoryPurpose {
  Proprietary = ''; // scenario
}

class PrivateIdentification {
  DateAndPlaceOfBirth: DateAndPlaceOfBirth = new DateAndPlaceOfBirth();
}

class RegulatoryReporting {
  Details: StructuredRegulatoryReporting = new StructuredRegulatoryReporting();
}
class PaymentTypeInformation {
  CategoryPurpose: CategoryPurpose = new CategoryPurpose();
}

class OtherIdentification {
  Identification = ''; // partyIdentifier
  SchemeName: SchemeName = new SchemeName();
  PrivateIdentification: PrivateIdentification = new PrivateIdentification();
  ContactDetails: ContactDetails = new ContactDetails();
}

class Identification {
  Identification = ''; // partyIdefntifier
  Other: OtherIdentification = new OtherIdentification();
  SchemeName: SchemeName = new SchemeName();
  PrivateIdentification: PrivateIdentification = new PrivateIdentification();
  ContactDetails: ContactDetails = new ContactDetails();
}

class Participant {
  Name = ''; // firstName + middleName + lastName
  Identification: Identification = new Identification();
}

class GroupHeader {
  InitiatingParty: Participant = new Participant();
}

class EquivalentAmount {
  CurrencyOfTransfer = ''; // currency
  Amount = 0; // amount
}

class ActiveOrHistoricCurrencyAndAmount {}

class Amount {
  InstructedAmount: ActiveOrHistoricCurrencyAndAmount = new ActiveOrHistoricCurrencyAndAmount();

  EquivalentAmount: EquivalentAmount = new EquivalentAmount();
}

class Account {
  Identification: Identification = new Identification();
  Proxy = ''; // name
  Name = '';
}

class ClearingSystemMemberIdentification {
  MemberIdentification = ''; // fspId
}

class FinancialInstitutionIdentification {
  ClearingSystemMemberIdentification: ClearingSystemMemberIdentification = new ClearingSystemMemberIdentification();
}

class Agent {
  FinancialInstitutionIdentification: FinancialInstitutionIdentification = new FinancialInstitutionIdentification();
}

class SupplementaryData {
  [key: string]: string | number;
}

class StructuredRemittanceInformation {
  AdditionalRemittanceInformation = '';
}

class RemittanceInformation {
  Structured: StructuredRemittanceInformation = new StructuredRemittanceInformation();
}

class CreditTransferTransactionInformation {
  PaymentIdentification: PaymentIdentification = new PaymentIdentification();
  CreditorAccount: Account = new Account();
  CreditorAgent: Agent = new Agent();
  Creditor: Participant = new Participant();
  Amount: Amount = new Amount();
  SupplementaryData: SupplementaryData = new SupplementaryData(); // {"FeeCurrency": "ZAR", "FeeAmount": 123.45}
  PaymentTypeInformation: PaymentTypeInformation = new PaymentTypeInformation();
  RegulatoryReporting: RegulatoryReporting = new RegulatoryReporting();
  RemittanceInformation: RemittanceInformation = new RemittanceInformation(); // note
}

class PaymentInformation {
  PaymentInformationIdentification = ''; // quoteId
  CreditTransferTransactionInformation: CreditTransferTransactionInformation = new CreditTransferTransactionInformation();

  DebtorAccount: Account = new Account();
  DebtorAgent: Agent = new Agent();
  Debtor: Participant = new Participant();
}

export class CustomerCreditTransferInitiation {
  GroupHeader: GroupHeader = new GroupHeader();
  PaymentInformation: PaymentInformation = new PaymentInformation();
  SupplementaryData: SupplementaryData = new SupplementaryData(); // {"payer.merchantClassificationCode": "value", "payee.merchantClassificationCode": "value", "initiatorType": "person", "latitude": "123.45", "longitude": "1234.56"}

  constructor(init: Partial<CustomerCreditTransferInitiation>) {
    if (!init) {
      throw new Error('CustomerCreditTransferInitiation was not received in the request body');
    }

    // We assign all the properties present in the init parameter to the object we are creating.
    Object.assign(this, init);
  }
}
