import * as kafka from 'kafka-node';
import { log } from '../helper';

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  log('Handling quote message', topic);
  // Write required logic here
};

export default handleQuoteMessage;
