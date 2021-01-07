import { RedisClient } from 'redis';
import { get } from '../redis-client';

const handleSimSwap = async (
  message: any, // TODO: create a transaction interface so we can use that here
  client: RedisClient,
) => {
  const sourceMSIDN: string = message.ILPSourceAccountAddress;
  const currentICCID: string = message.PayerICCID;

  const oldTransactions = await get(client, sourceMSIDN);
  const sourceILPTransactions = JSON.parse(oldTransactions);

  if (sourceILPTransactions == undefined
    || sourceILPTransactions[0] == undefined) {
    return false;
  }

  if (currentICCID === sourceILPTransactions[0].PayerICCID) {
    return false;
  } else {
    return true;
  }
};

export default handleSimSwap;