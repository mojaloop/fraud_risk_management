import * as kafka from 'kafka-node';
import { log } from '../helper';

const handlePartyMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  log('Handling party message', topic);
  // Write required logic here
};

export default handlePartyMessage;
