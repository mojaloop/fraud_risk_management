/* eslint-disable eqeqeq */
import * as kafka from 'kafka-node';
import { log } from '../helper';
import { publish } from '../producer/producer';
import { get } from '../redis-client/redis-client';

const processResult = async (topic: string, txID: string, success: boolean) => {
  await publish(
    topic,
    `[${success}] Transaction: ${txID} ${
      success ? 'failed' : 'passed'
    } Recent SIM swap check.`,
  );
};

const handleQuoteMessage = async (message: kafka.Message, topic: string) => {
  const jMessage = JSON.parse(message.value.toString());
  log(`Handling quote message with TXID ${jMessage.TransactionID}`, topic);
  const sourceMSIDN: string = jMessage.ILPSourceAccountAddress;
  const currentICCID: string = jMessage.PayerICCID;
  // Write required logic here
  const oldTransactions = await get(sourceMSIDN);
  const sourceILPTransactions = JSON.parse(oldTransactions);

  if (
    sourceILPTransactions == undefined ||
    sourceILPTransactions[0] == undefined
  ) {
    await processResult(topic, jMessage.TransactionID, false);
  }

  if (currentICCID === sourceILPTransactions[0].PayerICCID) {
    await processResult(topic, jMessage.TransactionID, false);
  } else {
    await processResult(topic, jMessage.TransactionID, true);
  }
};

export default handleQuoteMessage;
