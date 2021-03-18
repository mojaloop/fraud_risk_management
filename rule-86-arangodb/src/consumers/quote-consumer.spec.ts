import { Database } from 'arangojs';
import { ArrayCursor } from 'arangojs/cursor';
import { configuration } from '../config/config';
import quoteConsumer from './quote-consumer';

describe('Quote Consumer', () => {
  let queryDBSpy: jest.SpyInstance;
  beforeEach(() => {
    queryDBSpy = jest.spyOn(quoteConsumer, 'queryDB');
  });

  it('Should not find transacting between parties', async () => {
    queryDBSpy.mockImplementation(() => {
      return new Promise<string[][]>((resolve) => { resolve([]); });
    });
    const message = '{"TransactionID":"5d9ca723-9904-475f-aa3f-4e7112f7da5c","PayerICCID":"8964064042106240834722","ILPSourceAccountAddress":"g.tz.fsp001.msisdn.2558617728568","ILPDestinationAccountAddress":"g.tz.fsp001.msisdn.2558613728573","Payer":{"PartyIDType":"PERSONAL_ID","PartyID":"5706257071089","PartyName":["Random","McGuyver"],"PersonalIdentifierType":"NATIONAL_ID_CARD"},"FSPIOPSource":"payerfsp","FSPIOPDestination":"payeefsp","TransactionType":{"AmountType":"SEND","TransactionScenario":"WITHDRAW","TransactionInitiator":"PAYER","TransactionInitiatorType":"CONSUMER"},"Amount":"7750.00","HTTPTransactionDate":"1615557975942","TransactionAuthenticationType":"OTP","missingFields":["ILPSourceAccountAddress","ILPDestinationAccountAddress","PayerContactNo","PayeeContactNo","Fee","Payer.PersonalIdentifierType","Payee.PartyName","SourceAccountBalance","SourceAccountTransactionLimit","SourceAccountDailyLimit","SourceAccountPINDate","PayerDeviceIMEI","PayerICCID","Location","TransactionAuthenticationType"],"PayerContactNo":"+2558617728568","PayeeContactNo":"+2558799634560","SourceAccountBalance":"20000.00","SourceAccountDailyLimit":"2000.00","SourceAccountPINDate":"Mon, 14 Dec 2020 8:42:35 GMT","Fee":"1.00","SourceAccountTransactionLimit":"1000.00","Payee":{"PartyName":"Donte Kirwan"},"PayerDeviceIMEI":"353258077919061","additionalFields":["quoteId","payer.persoanlInfo.complexName.lastName","payer.personalInfo.dateOfBirth","payee.partyIdInfo.partyIdType","payee.partyIdInfo.partyIdentifier","amount.currency","note"],"Location":"35.591818, 17.57770"}';
    const result = await quoteConsumer.handleQuoteMessage(message);
    const sourceMSISDN = 'ILPS/payerfsp.msisdn.5706257071089';
    expect(queryDBSpy).toBeCalledWith(sourceMSISDN, expect.any(Database));
    expect(result).toEqual('Transaction: 5d9ca723-9904-475f-aa3f-4e7112f7da5c Not Transacting between parties');
  });

  it('Should find transacting between parties', async () => {
    queryDBSpy.mockImplementation(() => {
      return new Promise<string[]>((resolve) => { resolve(['asdf', 'asdf']); });
    });
    const message = '{"TransactionID":"5d9ca723-9904-475f-aa3f-4e7112f7da5c","PayerICCID":"8964064042106240834722","ILPSourceAccountAddress":"g.tz.fsp001.msisdn.2558617728568","ILPDestinationAccountAddress":"g.tz.fsp001.msisdn.2558613728573","Payer":{"PartyIDType":"PERSONAL_ID","PartyID":"5706257071089","PartyName":["Random","McGuyver"],"PersonalIdentifierType":"NATIONAL_ID_CARD"},"FSPIOPSource":"payerfsp","FSPIOPDestination":"payeefsp","TransactionType":{"AmountType":"SEND","TransactionScenario":"WITHDRAW","TransactionInitiator":"PAYER","TransactionInitiatorType":"CONSUMER"},"Amount":"7750.00","HTTPTransactionDate":"1615557975942","TransactionAuthenticationType":"OTP","missingFields":["ILPSourceAccountAddress","ILPDestinationAccountAddress","PayerContactNo","PayeeContactNo","Fee","Payer.PersonalIdentifierType","Payee.PartyName","SourceAccountBalance","SourceAccountTransactionLimit","SourceAccountDailyLimit","SourceAccountPINDate","PayerDeviceIMEI","PayerICCID","Location","TransactionAuthenticationType"],"PayerContactNo":"+2558617728568","PayeeContactNo":"+2558799634560","SourceAccountBalance":"20000.00","SourceAccountDailyLimit":"2000.00","SourceAccountPINDate":"Mon, 14 Dec 2020 8:42:35 GMT","Fee":"1.00","SourceAccountTransactionLimit":"1000.00","Payee":{"PartyName":"Donte Kirwan"},"PayerDeviceIMEI":"353258077919061","additionalFields":["quoteId","payer.persoanlInfo.complexName.lastName","payer.personalInfo.dateOfBirth","payee.partyIdInfo.partyIdType","payee.partyIdInfo.partyIdentifier","amount.currency","note"],"Location":"35.591818, 17.57770"}';
    const result = await quoteConsumer.handleQuoteMessage(message);
    const sourceMSISDN = 'ILPS/payerfsp.msisdn.5706257071089';
    expect(queryDBSpy).toBeCalledWith(sourceMSISDN, expect.any(Database));
    expect(result).toEqual('Transaction: 5d9ca723-9904-475f-aa3f-4e7112f7da5c Transacting between parties');
  });

  it('Should return empty DB results', async () => {
    queryDBSpy.mockRestore();
    const db: Database = new Database();
    const returnObj: string[] = [];
    const mockBatches = {
      all: async () => { return returnObj; },
    };
    const mockObj = { batches: mockBatches } as unknown as ArrayCursor;

    const dbSpy = jest.spyOn(db, 'query').mockImplementation(() =>
      new Promise<ArrayCursor>((resolve) => {
        resolve(mockObj);
      }),
    );
    const result = await quoteConsumer.queryDB('', db);
    expect(dbSpy).toBeCalled();
    expect(result).toEqual(returnObj);
  });
});