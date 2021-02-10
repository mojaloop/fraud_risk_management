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

  const sourceILPTransactions = JSON.parse(ILPList);
  const ILPCount = sourceILPTransactions.filter(
    (transaction: any) =>
      targetILP !== transaction.ILPDestinationAccountAddress,
  );
  const isNewILP = ILPCount.length > 0;
  await publish(
    topic,
    `[${isNewILP}] Transaction: ${txID} from ${sourceILP} to ${targetILP} is ${
      isNewILP ? '' : 'not '
    } a new ILP transaction`,
  );
};

export default handleQuoteMessage;
