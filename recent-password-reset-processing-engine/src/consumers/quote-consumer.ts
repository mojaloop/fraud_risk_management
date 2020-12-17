import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const txID: string = jMessage.TransactionID;
  log(`Handling quote message with TXID ${txID}`, topic);
  const sourceAccountPINDate = jMessage.SourceAccountPINDate;

  if (!sourceAccountPINDate) {
    publish(topic, `Transaction: ${txID} doesn't have PIN change information`, false);
    return;
  }

  const hours = Math.abs(Date.now() - new Date(jMessage.SourceAccountPINDate).valueOf()) / 3600000;
  if (hours < 72) {
    publish(topic, `Transaction: ${txID} has recently changed their PIN`, true);
  } else {
    publish(topic, `Transaction: ${txID} has not recently changed their PIN`, false);
  }
};

export default handleQuoteMessage;
