import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import { log } from './helper';
import { publish } from './producer';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  client: RedisClient,
) => {
  const jMessage = JSON.parse(message.value.toString());

  // TODO: WRITE SOME LOGIC TO RUN RULES AND EVALUTE THEIR RESULTS. 

  // await publish(topic, `[${TransactionID}][IsCashWithdraw][${topic}][${isCashWithdraw}] Transaction: ${TransactionID} from ${ILPSourceAccountAddress} is ${(isCashWithdraw) ? '' : 'not '}a cash withdraw`);
};

export default handleQuoteMessage;
