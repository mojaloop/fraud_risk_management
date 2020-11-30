/* eslint-disable linebreak-style */
import * as kafka from 'kafka-node';
import { log } from '../helper';

const handleTransferMessage = async (
  message: kafka.Message,
  topic: string,
) => {
  const jMessage = JSON.parse(message.value.toString());
  log('Handling transfer message', topic);
  // Write required logic here
};

export default handleTransferMessage;
