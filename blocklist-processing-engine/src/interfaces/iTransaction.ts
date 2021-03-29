export interface ITransaction {
  additionalFields: string[];
  Amount: string;
  Fee: string;
  FSPIOPDestination: string;
  FSPIOPSource: string;
  HTTPTransactionDate: string;
  ILPDestinationAccountAddress: string;
  ILPSourceAccountAddress: string;
  Location: string;
  missingFields: string[];
  PayeeContactNo: string;
  Payer: {
    PartyIDType: string;
    PartyID: string;
    PartyName: string[];
    PersonalIdentifierType: string;
  };
  PayerContactNo: string;
  PayerDeviceIMEI: string;
  PayerICCID: string;
  SourceAccountBalance: string;
  SourceAccountDailyLimit: string;
  SourceAccountPINDate: string;
  SourceAccountTransactionLimit: string;
  TransactionAuthenticationType: string;
  TransactionID: string;  
  TransactionType: {
    AmountType: string;
    TransactionScenario: string;
    TransactionInitiator: string;
    TransactionInitiatorType: string;
  };
}
