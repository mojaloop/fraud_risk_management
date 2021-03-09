/* eslint-disable linebreak-style */
import * as kafka from 'kafka-node';
import { isBlocked } from '../redis-client/redis-client';
import { sanitizeNumber } from '../helper';

const getMSISDN = (message: string): string => {
  const jMessage = JSON.parse(message);
  return sanitizeNumber(jMessage.PayerContactNo);
};

const handleTransferMessage = async (
  message: kafka.Message,
  topic: string,
  handleBlock: (
    msisdn: string,
    topic: string,
    isBlocked: number,
    txID: string,
  ) => any,
) => {
  const msisdn = getMSISDN(message.value.toString());
  const blocked = await isBlocked(msisdn);
  await handleBlock(msisdn, topic, blocked, 'N/A');
};

export default handleTransferMessage;
