import async from 'async';
import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import rules from './rules';
import { publish } from './producer';
import { get } from './redis-client';

class typology27Type {
  rule9: boolean | undefined;
  rule12: boolean | undefined;
  rule14: boolean | undefined;
  rule18: boolean | undefined;
  rule30: boolean | undefined;
  rule32: boolean | undefined;
  rule78: boolean | undefined;
}

// Composed probability for typology 27 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
const handleScores = (scores: any, topic: string, TransactionID: string) => {
  const score =
    (scores.rule9 ? 1 : 0)
    * (scores.rule12 ? 1 : 0)
    * (
      (scores.rule14 ? 0.2 : 0)
      + (scores.rule18 ? 0.2 : 0)
      + (scores.rule30 ? 0.2 : 0)
      + (scores.rule32 ? 0.2 : 0)
      + (scores.rule78 ? 0.2 : 0)
    );

  publish(topic, `[typology-27][${TransactionID}][${score}] Typology 27 score is ${score}`);
}

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  client: RedisClient,
) => {
  try {
    const transfer = JSON.parse(message.value.toString());
    const { TransactionID, ILPSourceAccountAddress } = transfer;

    const ILPList = await get(client, ILPSourceAccountAddress);
    const historicalData = JSON.parse(ILPList);
    const scores: typology27Type = new typology27Type();

    scores.rule9 = rules.handleRecentSimSwap({ transfer, historicalData });
    scores.rule12 = rules.handlePartyTypeIndividual(transfer);
    scores.rule14 = rules.handleRecentPasswordReset(transfer);
    scores.rule18 = rules.handleExceptionallyLargeTransfer({ transfer, historicalData });
    scores.rule30 = rules.handleNewPayeeTransfer({ transfer, historicalData });
    scores.rule32 = rules.handleAccountDrain(transfer);
    scores.rule78 = rules.handleCashWithdraw(transfer);

    handleScores(scores, topic, TransactionID);
  } catch (e) {
    console.error(e);
  }
};


export default handleQuoteMessage;
