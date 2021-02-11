import * as kafka from 'kafka-node';
import { isBlocked } from '../redis-client/redis-client';
import { sanitizeNumber } from '../helper';

const getMSISDNs = (jsonMessage: any): string[] => [
  sanitizeNumber(jsonMessage.PayerContactNo),
  sanitizeNumber(jsonMessage.PayeeContactNo),
];

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  handleBlock: (
    msisdn: string,
    topic: string,
    isBlocked: number,
    txID: string,
  ) => any,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const msisdns = getMSISDNs(jMessage);
  const promises: Promise<any>[] = [];

  msisdns.forEach((msisdn) => {
    promises.push(
      new Promise(async (resolve) => {
        const blocked = await isBlocked(msisdn);
        await handleBlock(msisdn, topic, blocked, jMessage.TransactionID);
        resolve(undefined);
      }),
    );
  });
  await Promise.all(promises);
};

export default handleQuoteMessage;
