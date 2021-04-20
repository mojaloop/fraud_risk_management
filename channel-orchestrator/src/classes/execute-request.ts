import { ITransaction } from '../interfaces/iTransaction';

export class ExecuteRequest implements ITransaction {
  // Populate with the structure that you expect to receive, the blow is just the default transaction that we would receive
  // Populate with the structure that you expect to receive, the blow is just the default transaction that we would receive
  additionalFields!: string[];
  Amount!: string;
  Fee!: string;
  FSPIOPDestination!: string;
  FSPIOPSource!: string;
  HTTPTransactionDate!: string;
  ILPDestinationAccountAddress!: string;
  ILPSourceAccountAddress!: string;
  Location!: string;
  missingFields!: string[];
  PayeeContactNo!: string;
  Payer!: {
    PartyIDType: string;
    PartyID: string;
    PartyName: string[];
    PersonalIdentifierType: string;
  };

  PayerContactNo!: string;
  PayerDeviceIMEI!: string;
  PayerICCID!: string;
  SourceAccountBalance!: string;
  SourceAccountDailyLimit!: string;
  SourceAccountPINDate!: string;
  SourceAccountTransactionLimit!: string;
  TransactionAuthenticationType!: string;
  TransactionID!: string;
  TransactionType!: {
    AmountType: string;
    TransactionScenario: string;
    TransactionInitiator: string;
    TransactionInitiatorType: string;
  };

  // We expect the initial value to be passed to be of similar structure to what we have
  constructor(init: Partial<ExecuteRequest>) {
    if (!init) {
      throw new Error('Execution request was not received in the request body');
    }

    // We assign all the properties present in the init parameter to the object we are creating.
    Object.assign(this, init);
    // We assert that some of the required properties are populated to process this service's logic
    // The below are just some examples for the template, add the fields that are required by your service
    if (!this.TransactionID) {
      throw new Error('Transaction ID is not present in execution request.');
    }

    if (!this.PayeeContactNo) {
      throw new Error('PayeeContactNo is not present in execution request.');
    }

    if (!this.PayerContactNo) {
      throw new Error('PayerContactNo is not present in execution request.');
    }
  }
}
