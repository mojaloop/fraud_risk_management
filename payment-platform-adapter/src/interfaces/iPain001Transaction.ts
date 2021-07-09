import { iMLQuote } from './iMLQuote';
import { v4 } from 'uuid';

// https://lextego.atlassian.net/browse/AM-398
// https://en.wikipedia.org/wiki/List_of_country_calling_codes
const dialingCodes = [
  "1", "20", "27", "211", "212", "213", "216", "218", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "290", "291", "297", "298", "299", "30", "31", "32", "33", "34", "36", "39", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "3801", "381", "382", "383", "385", "386", "387", "389", "40", "41", "43", "44", "45", "46", "47", "48", "49", "420", "421", "423", "51", "52", "53", "54", "55", "56", "57", "58", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "60", "61", "62", "63", "64", "65", "66", "670", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "685", "686", "687", "688", "689", "690", "691", "692", "7", "81", "82", "84", "86", "800", "808", "850", "852", "853", "855", "856", "870", "878", "880", "881", "882", "883", "886", "888", "91", "92", "93", "94", "95", "98", "960", "961", "962", "963", "964", "965", "966", "967", "968", "970", "971", "972", "973", "974", "975", "976", "977", "979", "991", "992", "993", "994", "995", "996", "997", "998"
]

String.prototype.toMobileNumber = function (this: string): string {
  if (!this || this.length < 4)
    return this;
  let toReturn = this.replace('+', '').replace(' ', '').replace('(', '').replace(')', '');
  for (let index = 0; index < dialingCodes.length; index++) {
    const element = dialingCodes[index];
    if (toReturn.startsWith(element)) {
      toReturn = `+${element}-${toReturn.substr(element.length)}`;
      return toReturn;
    }
  }
  return "";
};

class PaymentIdentification {
  EndToEndIdentification = ''; // transactionId
}

class ContactDetails {
  MobileNumber = ""; // Initiator
}

class DateAndPlaceOfBirth {
  Birthdate: string = new Date().toISOString().split('T')[0];
  ProvinceOfBirth = "Uknown";
  CityOfBirth = "";
  CountryOfBirth: string = "ZAR";
}

class SchemeName {
  Proprietary = ''; // partyIdType
}

class StructuredRegulatoryReporting {
  Code = ''; // balanceOfPayments
  Type: string = '';
}

class CategoryPurpose {
  Proprietary = ''; // scenario
}

class PrivateIdentification {
  DateAndPlaceOfBirth: DateAndPlaceOfBirth = new DateAndPlaceOfBirth();
  Other: OtherIdentification = new OtherIdentification();
}

class RegulatoryReporting {
  Details: StructuredRegulatoryReporting = new StructuredRegulatoryReporting();
  DebitCreditReportingIndicator: string = '';
}

class PaymentTypeInformation {
  CategoryPurpose: CategoryPurpose = new CategoryPurpose();

}

class OtherIdentification {
  Identification = ''; // partyIdentifier
  SchemeName: SchemeName = new SchemeName();
  //PrivateIdentification: PrivateIdentification = new PrivateIdentification();
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
  MessageIdentification: string = v4();
  CreationDateTime = Date.now();
  NumberOfTransactions = 1;
}

class EquivalentAmount {
  CurrencyOfTransfer = ''; // currency
  Amount = 0.0; // amount
}

class ActiveOrHistoricCurrencyAndAmount {
  Amount: number = 0.0;
}

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
  [key: string]: string | number;
}

class StructuredRemittanceInformation {
  AdditionalRemittanceInformation = '';
}

class RemittanceInformation {
  Structured: StructuredRemittanceInformation =
    new StructuredRemittanceInformation();
  Unstructured: string = '';
}

class Purpose {
  Code: string = '';
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
  ChargeBearer: string = '';
  Purpose: Purpose = new Purpose();
}

class AdviceTypeChoice {
  Code = '';
  Proprietary = '';
}

class AdviceType {
  CreditAdvice: AdviceTypeChoice = new AdviceTypeChoice();
  DebitAdvice: AdviceTypeChoice = new AdviceTypeChoice();
}

class DateAndDateTime2Choice {
  Date = '';
  DateTime = '';
}

class PaymentInformation {
  PaymentInformationIdentification = ''; // quoteId
  CreditTransferTransactionInformation: CreditTransferTransactionInformation =
    new CreditTransferTransactionInformation();
  PaymentMethod = '';
  DebtorAccount: Account = new Account();
  DebtorAgent: Agent = new Agent();
  Debtor: Participant = new Participant();
  RequestedAdviceType: AdviceType = new AdviceType();
  RequestedExecutionDate: DateAndDateTime2Choice = new DateAndDateTime2Choice();
}

export class CustomerCreditTransferInitiation {
  GroupHeader: GroupHeader = new GroupHeader();
  PaymentInformation: PaymentInformation = new PaymentInformation();
  SupplementaryData: SupplementaryData = new SupplementaryData(); // {"payer.merchantClassificationCode": "value", "payee.merchantClassificationCode": "value", "initiatorType": "person", "latitude": "123.45", "longitude": "1234.56"}

  constructor(transaction: iMLQuote) {
    if (transaction === undefined) return;
    this.PaymentInformation.PaymentInformationIdentification =
      transaction.quoteId;
    this.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification =
      transaction.transactionId;
    this.PaymentInformation.PaymentMethod = 'TRA'; //TransferAdvice
    this.PaymentInformation.RequestedAdviceType.DebitAdvice.Code = 'ADWD'
    this.PaymentInformation.RequestedAdviceType.DebitAdvice.Proprietary = 'Advice with transaction details'
    this.PaymentInformation.RequestedExecutionDate.Date =
      new Date(this.GroupHeader.CreationDateTime).toISOString().split('T')[0];
    this.PaymentInformation.RequestedExecutionDate.DateTime =
      new Date(this.GroupHeader.CreationDateTime).toISOString();
    this.PaymentInformation.CreditTransferTransactionInformation.ChargeBearer = 'DEBT';
    this.PaymentInformation.CreditTransferTransactionInformation.Purpose.Code = 'MP2P';
    // transaction.transactionRequestId MISSING

    // PAYEE
    if (transaction.payee) {
      if (transaction.payee.partyIdInfo.partyIdType === "MSISDN")
        this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.ContactDetails.MobileNumber =
          transaction.payee.partyIdInfo.partyIdentifier.toMobileNumber();
      this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.ContactDetails.MobileNumber =
        transaction.payee.partyIdInfo.partyIdentifier.toMobileNumber();
      this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.Identification =
        transaction.payee.partyIdInfo.partyIdentifier;
      // transaction.payee.partyIdInfo.partySubIdOrType
      this.PaymentInformation.CreditTransferTransactionInformation.CreditorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification =
        transaction.payee.partyIdInfo.fspId;
      // transaction.payee.partyIdInfo.extensionList
      this.SupplementaryData['payee.merchantClassificationCode'] =
        transaction.payee.merchantClassificationCode;
      this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Name = `${transaction.payee.personalInfo.complexName.firstName}${(transaction.payee.personalInfo.complexName.middleName ?? '').length > 0 ? ' ' + transaction.payee.personalInfo.complexName.middleName : ''}${(transaction.payee.personalInfo.complexName.lastName ?? '').length > 0 ? ' ' + transaction.payee.personalInfo.complexName.lastName : ''}`;
      this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
        new Date(transaction.payee.personalInfo.dateOfBirth).toISOString().split('T')[0];

      if (transaction.payee.partyIdInfo.partyIdType === "PERSONAL_ID") {
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.Other.SchemeName.Proprietary = transaction.payee.partyIdInfo.partySubIdOrType;
        this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.SchemeName.Proprietary = this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.Other.SchemeName.Proprietary;
      }
      else {
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.Other.SchemeName.Proprietary = transaction.payee.partyIdInfo.partyIdType;
        this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.Other.SchemeName.Proprietary = this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.Other.SchemeName.Proprietary;
      }

      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Creditor.FirstName'] = transaction.payee.personalInfo.complexName.firstName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Creditor.MiddleName'] = transaction.payee.personalInfo.complexName.middleName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Creditor.LastName'] = transaction.payee.personalInfo.complexName.lastName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Creditor.MerchantClassificationCode'] = transaction.payee.merchantClassificationCode;
    }

    if (transaction.payer) {
      // PAYER
      this.PaymentInformation.DebtorAccount.Identification.Other.SchemeName.Proprietary =
        transaction.payer.partyIdInfo.partyIdType;
      if (transaction.payer.partyIdInfo.partyIdType === "MSISDN")
        this.PaymentInformation.Debtor.Identification.ContactDetails.MobileNumber =
          transaction.payer.partyIdInfo.partyIdentifier.toMobileNumber();
      this.PaymentInformation.DebtorAccount.Identification.Other.Identification =
        transaction.payer.partyIdInfo.partyIdentifier;
      // transaction.payee.partyIdInfo.partySubIdOrType
      this.PaymentInformation.DebtorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification =
        transaction.payer.partyIdInfo.fspId;
      // transaction.payee.partyIdInfo.extensionList
      this.SupplementaryData['payer.merchantClassificationCode'] =
        transaction.payer.merchantClassificationCode;
      this.PaymentInformation.DebtorAccount.Proxy = transaction.payer.name;
      this.PaymentInformation.Debtor.Name =
        `${transaction.payer.personalInfo.complexName.firstName}${(transaction.payer.personalInfo.complexName.middleName ?? '').length > 0 ? ' ' + transaction.payer.personalInfo.complexName.middleName : ''}${(transaction.payer.personalInfo.complexName.lastName ?? '').length > 0 ? ' ' + transaction.payer.personalInfo.complexName.lastName : ''}`;
      this.PaymentInformation.Debtor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
        new Date(transaction.payer.personalInfo.dateOfBirth).toISOString().split('T')[0];
      if (transaction.payer.partyIdInfo.partyIdType === "PERSONAL_ID")
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.Other.SchemeName.Proprietary = transaction.payer.partyIdInfo.partySubIdOrType;
      else
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.Other.SchemeName.Proprietary = transaction.payer.partyIdInfo.partyIdType;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Debtor.FirstName'] = transaction.payer.personalInfo.complexName.firstName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Debtor.MiddleName'] = transaction.payer.personalInfo.complexName.middleName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Debtor.LastName'] = transaction.payer.personalInfo.complexName.lastName;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Debtor.MerchantClassificationCode'] = transaction.payer.merchantClassificationCode;
    }

    if (transaction.amount) {
      // transaction.amountType
      this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.CurrencyOfTransfer =
        transaction.amount.currency;
      if (transaction.amountType === 'SEND' || !transaction.fees) {
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.InstructedAmount.Amount = Number.parseFloat(transaction.amount.amount);
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.Amount = this.PaymentInformation.CreditTransferTransactionInformation.Amount.InstructedAmount.Amount;
      }
      else {
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.InstructedAmount.Amount = Number.parseFloat(transaction.amount.amount) + Number.parseFloat(transaction.fees.amount);
        this.PaymentInformation.CreditTransferTransactionInformation.Amount.EquivalentAmount.Amount = this.PaymentInformation.CreditTransferTransactionInformation.Amount.InstructedAmount.Amount;
      }
    }

    if (transaction.fees) {
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData[
        'fees.currency'
      ] = transaction.fees.currency;
      this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData[
        'fees.amount'
      ] = Number.parseFloat(transaction.fees.amount);
    }

    if (transaction.transactionType.subScenario)
      this.PaymentInformation.CreditTransferTransactionInformation.PaymentTypeInformation.CategoryPurpose.Proprietary =
        (transaction.transactionType.scenario ?? '') + (transaction.transactionType.subScenario ?? '');
    else
      this.PaymentInformation.CreditTransferTransactionInformation.PaymentTypeInformation.CategoryPurpose.Proprietary =
        transaction.transactionType.scenario;
    // transaction.transactionType.scenario.subScenario
    if (transaction.transactionType.initiator === "PAYER") {
      this.GroupHeader.InitiatingParty.Identification.ContactDetails.MobileNumber =
        this.PaymentInformation.Debtor.Identification.ContactDetails.MobileNumber;
      this.GroupHeader.InitiatingParty.Name =
        this.PaymentInformation.Debtor.Name;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.Other.Identification =
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.Other.Identification;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.Other.SchemeName.Proprietary =
        this.PaymentInformation.Debtor.Identification.PrivateIdentification.Other.SchemeName.Proprietary;
    } else {
      this.GroupHeader.InitiatingParty.Identification.ContactDetails.MobileNumber =
        this.PaymentInformation.CreditTransferTransactionInformation.CreditorAccount.Identification.ContactDetails.MobileNumber;
      this.GroupHeader.InitiatingParty.Name =
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Name;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate =
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.DateAndPlaceOfBirth.Birthdate;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.Other.Identification =
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.Other.Identification;
      this.GroupHeader.InitiatingParty.Identification.PrivateIdentification.Other.SchemeName.Proprietary =
        this.PaymentInformation.CreditTransferTransactionInformation.Creditor.Identification.PrivateIdentification.Other.SchemeName.Proprietary;
    }
    this.SupplementaryData['transactionType.initiatorType'] =
      transaction.transactionType.initiatorType;
    // transaction.transactionType.refundInfo.originalTransactionId
    // transaction.transactionType.refundInfo.refundReason
    this.PaymentInformation.CreditTransferTransactionInformation.RegulatoryReporting.Details.Code =
      transaction.transactionType.balanceOfPayments;
    this.PaymentInformation.CreditTransferTransactionInformation.RegulatoryReporting.DebitCreditReportingIndicator =
      'BOTH';
    this.PaymentInformation.CreditTransferTransactionInformation.RegulatoryReporting.Details.Type = 'BALANCE OF PAYMENTS';
    this.SupplementaryData['geoCode.latitude'] = transaction.geoCode.latitude;
    this.SupplementaryData['geoCode.longitude'] = transaction.geoCode.longitude;
    this.PaymentInformation.CreditTransferTransactionInformation.SupplementaryData['Envelope.Document.Expiration'] = transaction.expiration;
    this.PaymentInformation.CreditTransferTransactionInformation.RemittanceInformation.Structured.AdditionalRemittanceInformation =
      transaction.note;
    this.PaymentInformation.CreditTransferTransactionInformation.RemittanceInformation.Unstructured =
      transaction.note;
  }
}
