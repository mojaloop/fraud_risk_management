interface PayerType {
  PartyIDType: string,
  PersonalIdentifierType: string,
  PartyID: string,
  PartyName: string,
}

interface PayeeType {
  PartyName: string,
}

interface TransacType {
  AmountType: string,
  TransactionScenario: string,
  TransactionInitiator: string,
  TransactionInitiatorType: string,
}

interface HistoricalDataType {
  TransactionID: string,
  HTTPTransactionDate: string,
  FSPIOPSource: string,
  FSPIOPDestination: string,
  ILPSourceAccountAddress: string,
  ILPDestinationAccountAddress: string,
  PayerContactNo: string,
  PayeeContactNo: string,
  Amount: string,
  Fee: string,
  Payer: PayerType,
  Payee: PayeeType,
  SourceAccountBalance: string,
  SourceAccountTransactionLimit: string,
  SourceAccountDailyLimit: string,
  SourceAccountPINDate: string,
  PayerDeviceIMEI: string,
  PayerICCID: string,
  Location: string,
  TransactionType: TransacType,
  TransactionAuthenticationType: string,
}

interface AzureType {
  azureAccount: string,
  azureKey: string,
  azureShare: string,
  azureDirectory: string,
}

interface ConfigType {
  redisHost: string,
  redisPort: number,
  redisDB: number,
  reloadTime: number,
  partition: number,
  kafkaEndpoint: string,
  logTopic: string,
  loadFromLocal: boolean,
  azureConfig: AzureType,
}

// eslint-disable-next-line import/prefer-default-export
export { HistoricalDataType, ConfigType, AzureType };
