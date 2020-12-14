/* eslint-disable eqeqeq */
import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';
import { get } from '../redis-client/redis-client';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  log(`Handling quote message with TXID ${jMessage.transactionId}`, topic);
  const sourceMSIDN: string = `g.tz.${jMessage.payer.partyIdInfo.fspId}.msisdn.${jMessage.payer.partyIdInfo.partyIdentifier}`;
  const currentICCID: string = jMessage.payer.partyIdInfo.ICCID;
  // Write required logic here
  const oldTransactions = await get(sourceMSIDN);
  const sourceILPTransactions = JSON.parse(oldTransactions);

  if (sourceILPTransactions == undefined
    || sourceILPTransactions[0] == undefined
    || currentICCID === sourceILPTransactions[0].PayerICCID) {
    publish(topic, `[FALSE] Transaction: ${jMessage.transactionId} passed Recent SIM swap check.`);
  } else {
    publish(topic, `[TRUE] Transaction: ${jMessage.transactionId} failed Recent SIM swap check.`);
  }
};

export default handleQuoteMessage;
