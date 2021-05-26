import { iMLTransaction } from './iMLTransaction';

class PaymentIdentification {
  EndToEndIdentification = ''; // transactionId
}

class ContactDetails {
  MobileNumber = ''; // Initiator
}

class DateAndPlaceOfBirth {
  Birthdate: Date = new Date();
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
  InstructedAmount: ActiveOrHistoricCurrencyAndAmount =
    new ActiveOrHistoricCurrencyAndAmount();
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
  ClearingSystemMemberIdentification: ClearingSystemMemberIdentification =
    new ClearingSystemMemberIdentification();
}

class Agent {
  FinancialInstitutionIdentification: FinancialInstitutionIdentification =
    new FinancialInstitutionIdentification();
}

class SupplementaryData {
  [key: string]: string;
}

class StructuredRemittanceInformation {
  AdditionalRemittanceInformation = '';
}

class RemittanceInformation {
  Structured: StructuredRemittanceInformation =
    new StructuredRemittanceInformation();
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
  PaymentInformationIdentification = ''; // quiteId
  CreditTransferTransactionInformation: CreditTransferTransactionInformation =
    new CreditTransferTransactionInformation();

  DebtorAccount: Account = new Account();
  DebtorAgent: Agent = new Agent();
  Debtor: Participant = new Participant();
}

export class CustomerCreditTransferInitiation {
  PaymentInformation: PaymentInformation = new PaymentInformation();
  SupplementaryData: SupplementaryData = new SupplementaryData(); // {"payer.merchantClassificationCode": "value", "payee.merchantClassificationCode": "value", "initiatorType": "person", "latitude": "123.45", "longitude": "1234.56"}

  GroupHeader: GroupHeader = new GroupHeader();

  constructor(transaction: iMLTransaction) {
    if (transaction === undefined) return;
    this.PaymentInformation.PaymentInformationIdentification =
      transaction.quoteId;
    this.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification =
      transaction.transactionId;
    // transaction.transactionRequestId MISSING

    // PAYEE
    if (transaction.payee) {
      this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.SchemeName.Proprietary =
        transaction.payee.partyIdInfo.partyIdType;
      this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.Identification =
        transaction.payee.partyIdInfo.partyIdentifier;
      // transaction.payee.partyIdInfo.partySubIdOrType
      this.PaymentInformation.CreditTransferTransactionInformation.CreditorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification =
        transaction.payee.partyIdInfo.fspId;
      // transaction.payee.partyIdInfo.extensionList
      this.SupplementaryData['payee.merchantClassificationCode'] =
        transaction.payee.merchantClassificationCode;
      this.GroupHeader.InitiatingParty.Name =
        // this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Name =
        transaction.payee.name;
      this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Name = `${transaction.payee.personalInfo.complexName.firstName} ${transaction.payee.personalInfo.complexName.middleName} ${transaction.payee.personalInfo.complexName.lastName}`;
      try {
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
          new Date(transaction.payee.personalInfo.dateOfBirth);
      } catch {
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
          new Date();
      }
    }

    if (transaction.payer) {
      // PAYER
      this.PaymentInformation.DebtorAccount.Identification.Other.SchemeName.Proprietary =
        transaction.payer.partyIdInfo.partyIdType;
      this.PaymentInformation.DebtorAccount.Identification.Other.Identification =
        transaction.payer.partyIdInfo.partyIdentifier;
      // transaction.payee.partyIdInfo.partySubIdOrType
      this.PaymentInformation.DebtorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification =
        transaction.payer.partyIdInfo.fspId;
      // transaction.payee.partyIdInfo.extensionList
      this.SupplementaryData['payer.merchantClassificationCode'] =
        transaction.payer.merchantClassificationCode;
      this.PaymentInformation.DebtorAccount.Proxy = transaction.payer.name;
      this.PaymentInformation.Debtor.Name = `${transaction.payer.personalInfo.complexName.firstName} ${transaction.payer.personalInfo.complexName.middleName} ${transaction.payer.personalInfo.complexName.lastName}`;
      try {
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
          new Date(transaction.payer.personalInfo.dateOfBirth);
      } catch {
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
          new Date();
      }
    }

    if (transaction.amount) {
      // transaction.amountType
      this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.CurrencyOfTransfer =
        transaction.amount.currency;
      try {
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.Amount =
          Number.parseFloat(transaction.amount.amount);
      } catch {
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.Amount = 0;
      }
    }

    if (transaction.fees) {
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData[
        'fees.currency'
      ] = transaction.fees.currency;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData[
        'fees.amount'
      ] = transaction.fees.amount;
    }

    this.PaymentInformation.CreditTransferTransactionInformation.PaymentTypeInformation.CategoryPurpose.Proprietary =
      transaction.transactionType.scenario;
    // transaction.transactionType.scenario.subScenario
    this.GroupHeader.InitiatingParty.Identification.ContactDetails.MobileNumber =
      transaction.transactionType.initiator;
    this.SupplementaryData['transactionType.initiatorType'] =
      transaction.transactionType.initiatorType;
    // transaction.transactionType.refundInfo.originalTransactionId
    // transaction.transactionType.refundInfo.refundReason
    this.PaymentInformation.CreditTransferTransactionInformation.RegulatoryReporting.Details.Code =
      transaction.transactionType.balanceOfPayments;
    this.SupplementaryData['geoCode.latitude'] = transaction.geoCode.latitude;
    this.SupplementaryData['geoCode.longitude'] = transaction.geoCode.longitude;
    this.PaymentInformation.CreditTransferTransactionInformation.RemittanceInformation.Structured.AdditionalRemittanceInformation =
      transaction.note;
  }
}
