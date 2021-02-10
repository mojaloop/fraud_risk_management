import { Message } from 'kafka-node';
import { log } from './helper';
import { publish } from './producer';

const handleQuoteMessage = async (message: Message, topic: string) => {
  const jMessage = JSON.parse(message.value.toString());
  const { TransactionID } = jMessage;
  log(`Handling message with transfer ID ${TransactionID}`, topic);
  const {
    Amount,
    SourceAccountBalance,
    ILPSourceAccountAddress,
    ILPDestinationAccountAddress,
  } = jMessage;

  const isAccountDrain = Amount > SourceAccountBalance * 0.9;
  await publish(
    topic,
    `[${isAccountDrain}] Transaction: ${TransactionID} from ${ILPSourceAccountAddress} to ${ILPDestinationAccountAddress} is ${
      isAccountDrain ? 'bigger' : 'not bigger'
    } than the account balance`,
  );
};

export default handleQuoteMessage;
