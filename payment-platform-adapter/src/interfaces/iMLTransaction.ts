export interface geoCode {
  latitude: string;
  longitude: string;
}

export interface refundInfo {
  originalTransactionId: string;
  refundReason: string;
}

export interface transactionType {
  scenario: string; // DEPOSIT
  subScenario: string;
  initiator: string; // PAYER
  initiatorType: string; // CONSUMER
  refundInfo: refundInfo;
  balanceOfPayments: string;
}

export interface amount {
  currency: string; // AED
  amount: string;
}

export interface complexName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface personalInfo {
  complexName: complexName;
  dateOfBirth: string;
}

export interface extension {
  key: string;
  value: string;
}

export interface extensionList {
  extension: extension[];
}

export interface partyIdInfo {
  partyIdType: string; // MSISDN
  partyIdentifier: string;
  partySubIdOrType: string;
  fspId: string;
  extensionList: extensionList;
}

export interface payee {
  partyIdInfo: partyIdInfo;
  merchantClassificationCode: string;
  name: string;
  personalInfo: personalInfo;
}

export interface payer {
  partyIdInfo: partyIdInfo;
  merchantClassificationCode: string;
  name: string;
  personalInfo: personalInfo;
}

export interface iMLTransaction {
  quoteId: string;
  transactionId: string;
  transactionRequestId: string;
  payee: payee;
  payer: payer;
  amountType: string; // SEND
  amount: amount;
  fees: amount;
  transactionType: transactionType;
  geoCode: geoCode;
  note: string;
  expiration: string;
  extensionList: extensionList;
}
