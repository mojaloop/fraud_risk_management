import { iMLTransfer } from "./iMLTransfer";

export class InstructedAmount {
    Amount: number = 0.0; //ActiveCurrencyAndAmount -  = Number.parseFloat(transaction.fees.amount);
    Currency = ""; //ActiveCurrencyAndAmount
}

export class InterbankSettlementAmount {
    Amount: number = 0.0; //ActiveCurrencyAndAmount -  = Number.parseFloat(transaction.fees.amount);
    Currency = ""; //ActiveCurrencyAndAmount
}

export class PaymentIdentification {
    InstructionIdentification = ""; //Max35Text
    EndToEndIdentification = ""; //Max35Text
}

export class ClearingSystemMemberIdentification {
    MemberIdentification = ""; //Max35Text
}

export class FinancialInstitutionIdentification {
    ClearingSystemMemberIdentification = new ClearingSystemMemberIdentification();
}

export class Agent {
    FinancialInstitutionIdentification = new FinancialInstitutionIdentification();
}

export class Amount {
    Amount: number = 0.0; //ActiveCurrencyAndAmount -  = Number.parseFloat(transaction.fees.amount);
    Currency = ""; //ActiveCurrencyAndAmount
}

export class Charge {
    Amount = new Amount();
}

export class DateAndPlaceOfBirth {
    BirthDate = ""; //ISODate
}

export class SchemeName {
    Proprietary = ""; //Max35Text
}

export class Other {
    Identification = ""; //Max35Text
    SchemeName = new SchemeName();
}

export class PrivateIdentification {
    DateAndPlaceOfBirth = new DateAndPlaceOfBirth();
    Other = new Other();
}

export class Identification {
    PrivateIdentification = new PrivateIdentification();
}

export class ContactDetails {
    MobileNumber = ""; //PhoneNumber
}

export class Party {
    Name = ""; //Max140Text
    Identification = new Identification();
    ContactDetails = new ContactDetails();
}

export class Purpose {
    Code = ""; //ExternalPurpose1Code
}

export class SupplementaryData {
    [key: string]: string | number; //Envelope.Document.Expiration
}

export class Details {
    Type = ""; //Max35Text
    Code = ""; //Max10Text
}

export class RegulatoryReporting {
    DebitCreditReportingIndicator = ""; //RegulatoryReportingType1Code
    Details = new Details();
}

export class RemittanceInformation {
    RemittanceInformation = ""; //Max140Text

}

export class CreditTransferTransactionInformation {
    PaymentIdentification = new PaymentIdentification();
    InterbankSettlementAmount = new InterbankSettlementAmount();
    InstructedAmount = new InstructedAmount();
    ChargeBearer = ""; //ChargeBearerTypeCode
    Charges: Array<Charge> = new Array<Charge>();
    InitiatingParty = new Party();
    Debtor = new Party();
    DebtorAccount = new Party();
    DebtorAgent = new Agent();
    CreditorAgent = new Agent();
    Creditor = new Party();
    CreditorAccount = new Party();
    Purpose = new Purpose();
    SupplementaryData = new SupplementaryData(); //.Envelope.Document.Expiration
    RegulatoryReporting = new RegulatoryReporting();
    RemittanceInformation = new RemittanceInformation();
}

export class SettlementInformation {
    SettlementMethod = ""; //SettlementMethod1Code
}

export class GroupHeader {
    MessageIdentification = ""; //Max35Text
    CreationDateTime = new Date(); //ISODateTime
    NumberOfTransactions = 0; //Max15NumericText
    SettlementInformation = new SettlementInformation();
}

export class FIToFICustomerCreditTransferV10 {
    GroupHeader = new GroupHeader();
    CreditTransferTransactionInformation = new CreditTransferTransactionInformation();

    constructor(transfer: iMLTransfer) {
        this.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification = transfer.transactionId;
        this.CreditTransferTransactionInformation.PaymentIdentification.InstructionIdentification = transfer.transferId;
        this.CreditTransferTransactionInformation.CreditorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification = transfer.payeeFsp;
        this.CreditTransferTransactionInformation.DebtorAgent.FinancialInstitutionIdentification.ClearingSystemMemberIdentification.MemberIdentification = transfer.payerFsp;
        this.CreditTransferTransactionInformation.InterbankSettlementAmount.Amount = Number.parseFloat(transfer.amount.amount);
        this.CreditTransferTransactionInformation.InterbankSettlementAmount.Currency = transfer.amount.currency;
        //info.ilpPacket missing
        //info.expiration missing
    }
}
