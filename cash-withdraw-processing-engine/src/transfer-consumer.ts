import * as kafka from 'kafka-node';
import { log } from './helper';
import { publish } from './producer';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  const { TransactionID, ILPSourceAccountAddress } = jMessage;
  log(`Handling message with quote ID ${TransactionID}`, topic);
  const transactionType = jMessage.TransactionType.TransactionScenario;

  const isCashWithdraw = transactionType === 'WITHDRAW';
  await publish(topic, `[${isCashWithdraw}] Transaction: ${TransactionID} from ${ILPSourceAccountAddress} is ${(isCashWithdraw) ? '' : 'not '}a cash withdraw`);
};

export default handleQuoteMessage;
