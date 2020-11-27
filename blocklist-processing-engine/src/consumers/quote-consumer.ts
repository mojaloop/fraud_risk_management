import * as kafka from 'kafka-node';
import { isBlocked } from '../redis-client/redis-client';
import { sanitizeNumber } from '../helper';

const getMSISDNs = (message: string): string[] => {
  const jMessage = JSON.parse(message);
  return [
    sanitizeNumber(jMessage.payer.partyIdInfo.partyIdentifier),
    sanitizeNumber(jMessage.payee.partyIdInfo.partyIdentifier),
  ];
};

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  handleBlock: (msisdn: string, topic: string, isBlocked: number) => any,
) => {
  const msisdns = getMSISDNs(message.value.toString());
  const promises: Promise<any>[] = [];

  msisdns.forEach((msisdn) => {
    promises.push(new Promise(async (resolve) => {
      const blocked = await isBlocked(msisdn);
      await handleBlock(msisdn, topic, blocked);
      resolve();
    }));
  });
  await Promise.all(promises);
};

export default handleQuoteMessage;
