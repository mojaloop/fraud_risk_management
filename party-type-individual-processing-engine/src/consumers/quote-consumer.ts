import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';

const handleQuoteMessage = async (message: kafka.Message, topic: string) => {
  const jMessage = JSON.parse(message.value.toString());
  const txID: string = jMessage.TransactionID;
  await log(`Handling message with TXID ${txID}`, topic);
  const partyIdType = jMessage.Payer.PartyIDType;
  const PartyIsIndividual = partyIdType === 'PERSONAL_ID';
  await publish(
    topic,
    `[${PartyIsIndividual}] Transaction: ${txID} is ${
      PartyIsIndividual ? '' : 'not '
    }an Individual`,
  );
};

export default handleQuoteMessage;
