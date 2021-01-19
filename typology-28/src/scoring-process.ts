// TODO

import async from 'async';
import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import rules from './rules';
import { publish } from './producer';
import { get } from './redis-client';
import { log } from './helper';

class typology28Type {
  rule2: boolean | undefined;
  rule12: boolean | undefined;
  rule16: boolean | undefined;
  rule27: boolean | undefined;
  rule30: boolean | undefined;
  rule63: boolean | undefined;
  rule64: boolean | undefined;
}

// Composed probability for typology 28 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
const handleScores = (scores: any, topic: string, TransactionID: string) => {
  const score =
  (  scores.rule2 ? 0.14 : 0)
  + (scores.rule12 ? 0.14 : 0)
  + (scores.rule16 ? 0.14 : 0)
  + (scores.rule27 ? 0.14 : 0)
  + (scores.rule30 ? 0.14 : 0)
  + (scores.rule63 ? 0.15 : 0)
  + (scores.rule64 ? 0.15 : 0)
;

  publish(topic, `"typology":"typology-28","transactionID":"${TransactionID}","score":${score},"textResult":"Typology 28 score is ${score}, Reason: ${
      (scores.rule2 ? 'Velocity (incoming), ' : '')
    + (scores.rule12 ? 'Party Type Individual, ' : '')
    + (scores.rule16 ? 'Transaction Convergence, ' : '')
    + (scores.rule27 ? 'Transaction Mirroring, ' : '')
    + (scores.rule30 ? 'New Payee, ' : '')
    + (scores.rule63 ? "Benford's Law, " : '')
    + (scores.rule64 ? 'Uniform Distribution - Payee' : '')
    + '"}'
    }`);
}

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  senderClient: RedisClient,
  receiverClient: RedisClient,
) => {
  try {
    const transfer = JSON.parse(message.value.toString());
    const { TransactionID, ILPSourceAccountAddress, ILPDestinationAccountAddress } = transfer;
    const sourceHistoricalSendDataJSON = await get(senderClient, ILPSourceAccountAddress);
    const payeeHistoricalReceiveDataJSON = await get(receiverClient, ILPDestinationAccountAddress);
    const payeeHistoricalSendDataJSON = await get(senderClient, ILPDestinationAccountAddress);

    const sourceHistoricalSendData = JSON.parse(sourceHistoricalSendDataJSON);
    const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
    const payeeHistoricalReceiveData = JSON.parse(payeeHistoricalReceiveDataJSON);

    // See https://lextego.atlassian.net/browse/ACTIO-197
    const scores: typology28Type = new typology28Type();

    // try { scores.rule17 = rules.handleTransactionDivergence(transfer, payeeHistoricalSendData); }
    // catch (error) {
    //   log(`Error while handling transaction divergence for ${TransactionID}, with message: \r\n${error}`, topic)
    // }
    try { scores.rule27 = rules.handleTransactionMirroring(transfer, payeeHistoricalSendData, payeeHistoricalReceiveData); }
    catch (error) {
      log(`Error while handling Transaction Mirroring ${TransactionID}, with message: \r\n${error}`, topic)
    }
    try { scores.rule63 = rules.handleBenfordsLaw(transfer, payeeHistoricalReceiveData); }
    catch (error) {
      log(`Error while handling Benford's Law ${TransactionID}, with message: \r\n${error}`, topic)
    }
    
    handleScores(scores, topic, TransactionID);
  } catch (e) {
    console.error(e);
  }
};


export default handleQuoteMessage;
