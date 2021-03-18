import { configuration } from './config/config';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer/producer';
import express, { response } from 'express';
import { ApplicationService } from './services/application.service';

export const app = express();
export const appService = new ApplicationService();

const start = async (): Promise<void> => {
  await initializeLoggingProducer();
  await initializeProducer();

  app.use(express.json());

  app.get('/*', (req, res) => appService.getOnline(res));

  app.post('/execute', async (req, res) => {
    try { await appService.executeRequest(req, res); }
    catch (error) {
      response.status(500).send(`Error while hanlding request with error:\r\n${error}`);
    }
  });

  app.listen(configuration.hostPort, () => {
    console.log(
      `Predicate Builder Service - Listening on: http://localhost:${configuration.hostPort}`,
    );
  });
};
start();

/* //LEGACY STARTUP - KAFKA ETC
const start = async (): Promise<void> => {
  await initializeLoggingProducer();
  await initializeProducer();
  configuration.topics.forEach((topic) => {
    createKafkaConsumer(topic, configuration);
  });
};

const debug = async (): Promise<void> => {
  await initializeLoggingProducer();
  await initializeProducer();
  const message = `{"TransactionID":"5d9ca723-9904-475f-aa3f-4e7112f7da5c","PayerICCID":"8964064042106240834722","ILPSourceAccountAddress":"g.tz.fsp001.msisdn.2558617728568","ILPDestinationAccountAddress":"g.tz.fsp001.msisdn.2558613728573","Payer":{"PartyIDType":"PERSONAL_ID","PartyID":"5706257071089","PartyName":["Random","McGuyver"],"PersonalIdentifierType":"NATIONAL_ID_CARD"},"FSPIOPSource":"payerfsp","FSPIOPDestination":"payeefsp","TransactionType":{"AmountType":"SEND","TransactionScenario":"WITHDRAW","TransactionInitiator":"PAYER","TransactionInitiatorType":"CONSUMER"},"Amount":"7750.00","HTTPTransactionDate":"1615557975942","TransactionAuthenticationType":"OTP","missingFields":["ILPSourceAccountAddress","ILPDestinationAccountAddress","PayerContactNo","PayeeContactNo","Fee","Payer.PersonalIdentifierType","Payee.PartyName","SourceAccountBalance","SourceAccountTransactionLimit","SourceAccountDailyLimit","SourceAccountPINDate","PayerDeviceIMEI","PayerICCID","Location","TransactionAuthenticationType"],"PayerContactNo":"+2558617728568","PayeeContactNo":"+2558799634560","SourceAccountBalance":"20000.00","SourceAccountDailyLimit":"2000.00","SourceAccountPINDate":"Mon, 14 Dec 2020 8:42:35 GMT","Fee":"1.00","SourceAccountTransactionLimit":"1000.00","Payee":{"PartyName":"Donte Kirwan"},"PayerDeviceIMEI":"353258077919061","additionalFields":["quoteId","payer.persoanlInfo.complexName.lastName","payer.personalInfo.dateOfBirth","payee.partyIdInfo.partyIdType","payee.partyIdInfo.partyIdentifier","amount.currency","note"],"Location":"35.591818, 17.57770"}`;
  await handleQuoteMessage(message, 'quotes');
}

//debug();
start();
*/