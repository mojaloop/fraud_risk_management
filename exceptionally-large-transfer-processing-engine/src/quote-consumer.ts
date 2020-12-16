import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import { log } from './helper';
import { publish } from './producer';
import { getILPList } from './redis-client';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  redisClient: RedisClient,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const { quoteId } = jMessage;
  await log(`Handling message with quote ID ${quoteId}`, topic);
  const { amount } = jMessage.amount;
  const payerPartyIdInfo = jMessage.payer.partyIdInfo;
  const payeePartyIdInfo = jMessage.payee.partyIdInfo;
  const sourceILP = `g.tz.${payerPartyIdInfo.fspId}.msisdn.${payerPartyIdInfo.partyIdentifier}`;
  const targetILP = `g.tz.${payeePartyIdInfo.fspId}.msisdn.${payeePartyIdInfo.partyIdentifier}`;
  const ILPList = await getILPList(redisClient, sourceILP);

  const sourceILPTransactions = JSON.parse(ILPList);
  const biggestTransactionAmount = Math.max(...sourceILPTransactions
    .map((transaction: any) => transaction.Amount));
  const isBigger = biggestTransactionAmount + biggestTransactionAmount * 0.5 < amount;
  await publish(topic, `[${isBigger}] Transaction: ${quoteId} from ${sourceILP} to ${targetILP} is ${(isBigger) ? 'bigger' : 'not bigger'} than the max recorded transaction`);
};

export default handleQuoteMessage;
