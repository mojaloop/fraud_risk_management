import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';
import { hGetAll } from '../redis-client/redis-client';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const sourceMSIDN: string = `g.tz.${payerPartyIdInfo.fspId}.msisdn.${payerPartyIdInfo.partyIdentifier}`;
  const currentICCID: string = jMessage.payer.partyIdInfo.ICCID;
  log(`Handling quote message with TXID ${jMessage.transactionId}`, topic);
  // Write required logic here
  const oldICCID = (await hGetAll(sourceMSIDN));
  if (oldICCID === undefined
    || oldICCID[0] === undefined
    || currentICCID === oldICCID[0]) {
    publish(topic, `[FALSE] Transaction: ${jMessage.transactionId} passes Recent SIM swap check. `);
  } else {
    publish(topic, `[TRUE] Transaction: ${jMessage.transactionId} ${sourceMSIDN} is ${(oldICCID) ? '' : 'not'} in set`);
  }
};

export default handleQuoteMessage;
