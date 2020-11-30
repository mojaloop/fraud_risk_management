import * as kafka from 'kafka-node';
import { log } from '../helper';

const handleAccountLookupMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  log('Handling account lookup message', topic);
  // Write required logic here
};

export default handleAccountLookupMessage;
