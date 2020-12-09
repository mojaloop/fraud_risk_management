import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';
import { isInSet } from '../redis-client/redis-client';

const handleAccountLookupMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const txID: string = jMessage.transactionId;
  log(`Handling account lookup message with TXID ${jMessage.transactionId}`, topic);
  // Write required logic here
  const txInSet = await isInSet(txID);
  publish(topic, `Transaction: ${txID} is ${(txInSet && (txInSet > 0)) ? '' : 'not'} in set`);
};

export default handleAccountLookupMessage;
