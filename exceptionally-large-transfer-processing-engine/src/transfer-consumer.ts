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
  const { TransactionID } = jMessage;
  log(`Handling message with quote ID ${TransactionID}`, topic);
  const { amount } = jMessage.amount;
  const sourceILP = jMessage.ILPSourceAccountAddress;
  const targetILP = jMessage.ILPDestinationAccountAddress;
  const ILPList = await getILPList(redisClient, sourceILP);

  const sourceILPTransactions = JSON.parse(ILPList);
  const biggestTransactionAmount = Math.max(
    ...sourceILPTransactions.map((transaction: any) => transaction.Amount),
  );
  const isBigger =
    biggestTransactionAmount + biggestTransactionAmount * 0.5 < amount;
  await publish(
    topic,
    `[${isBigger}] Transaction: ${TransactionID} from ${sourceILP} to ${targetILP} is ${
      isBigger ? 'bigger' : 'not bigger'
    } than the max recorded transaction`,
  );
};

export default handleQuoteMessage;
