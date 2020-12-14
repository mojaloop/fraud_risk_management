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
  const txID: string = jMessage.transactionId;
  await log(`Handling message with TXID ${txID}`, topic);
  const payerPartyIdInfo = jMessage.payer.partyIdInfo;
  const payeePartyIdInfo = jMessage.payee.partyIdInfo;
  const sourceILP = `g.tz.${payerPartyIdInfo.fspId}.msisdn.${payerPartyIdInfo.partyIdentifier}`;
  const targetILP = `g.tz.${payeePartyIdInfo.fspId}.msisdn.${payeePartyIdInfo.partyIdentifier}`;
  const ILPList = await getILPList(redisClient, sourceILP);
  console.log(sourceILP, targetILP);
  console.log(JSON.parse(ILPList));
  // await publish(topic, `[${PartyIsIndividual}] Transaction: ${txID} is ${(PartyIsIndividual) ? '' : 'not '}an Individual`);
};

export default handleQuoteMessage;
