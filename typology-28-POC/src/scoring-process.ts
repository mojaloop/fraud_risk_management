import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import rules from './rules';
import { publish } from './producer';
import { get } from './redis-client';
import { log } from './helper';

class Typology28Type {
  rule2?: boolean;
  rule12?: boolean;
  rule16?: boolean;
  rule27?: boolean;
  rule30?: boolean;
  rule63?: boolean;
  rule64?: boolean;
}

// Composed probability for typology 28 = (009.p)*(012.p)*(014.p+018.p+030.p+032.p+078.p)
const handleScores = (
  scores: Typology28Type,
  topic: string,
  TransactionID: string,
  transactionDate: string,
) => {
  const score =
    (scores.rule2 ? 0.14 : 0) +
    (scores.rule12 ? 0.14 : 0) +
    (scores.rule16 ? 0.14 : 0) +
    (scores.rule27 ? 0.14 : 0) +
    (scores.rule30 ? 0.14 : 0) +
    (scores.rule63 ? 0.15 : 0) +
    (scores.rule64 ? 0.15 : 0);
  publish(
    topic,
    `"typology":"typology-28","transactionID":"${TransactionID}","createDate":${transactionDate},"processedDate":${Date.now()},
  "score":${score},"textResult":"Typology 28 score is ${score}, Reason: ${
      (scores.rule2 ? 'Rule 2, ' : '') +
      (scores.rule12 ? 'Rule 12, ' : '') +
      (scores.rule16 ? 'Rule 16, ' : '') +
      (scores.rule27 ? 'Rule 27, ' : '') +
      (scores.rule30 ? 'Rule 30, ' : '') +
      (scores.rule63 ? 'Rule 63, ' : '') +
      (scores.rule64 ? 'Rule 64' : '') +
      '"}'
    }`,
  );

  // publish(topic, `"typology":"typology-28","transactionID":"${TransactionID}","createDate":${transactionDate},
  // "score":${score},"textResult":"Typology 28 score is ${score}, Reason: ${(scores.rule2 ? 'Velocity (incoming), ' : '')
  //   + (scores.rule12 ? 'Party Type Individual, ' : '')
  //   + (scores.rule16 ? 'Transaction Convergence, ' : '')
  //   + (scores.rule27 ? 'Transaction Mirroring, ' : '')
  //   + (scores.rule30 ? 'New Payee, ' : '')
  //   + (scores.rule63 ? "Benford's Law, " : '')
  //   + (scores.rule64 ? 'Uniform Distribution - Payee' : '')
  //   + '"}'
  //   }`);
};

const handleQuoteMessage = async (
  message: kafka.Message,
  topic: string,
  senderClient: RedisClient,
  receiverClient: RedisClient,
) => {
  try {
    const transfer = JSON.parse(message.value.toString());
    const {
      TransactionID,
      ILPDestinationAccountAddress,
      HTTPTransactionDate,
      ILPSourceAccountAddress,
    } = transfer;
    const payeeHistoricalReceiveDataJSON = await get(
      receiverClient,
      ILPDestinationAccountAddress,
    );
    const payerHistoricalSendDataJSON = await get(
      senderClient,
      ILPSourceAccountAddress,
    );
    const payeeHistoricalSendDataJSON = await get(
      senderClient,
      ILPDestinationAccountAddress,
    );

    const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
    const payerHistoricalSendData = JSON.parse(payerHistoricalSendDataJSON);
    const payeeHistoricalReceiveData = JSON.parse(
      payeeHistoricalReceiveDataJSON,
    );

    // See https://lextego.atlassian.net/browse/ACTIO-197
    const scores: Typology28Type = new Typology28Type();

    // try { scores.rule17 = rules.handleTransactionDivergence(transfer, payeeHistoricalSendData); }
    // catch (error) {
    //   log(`Error while handling transaction divergence for ${TransactionID}, with message: \r\n${error}`, topic)
    // }
    try {
      scores.rule12 = rules.handlePartyTypeIndividual(transfer);
    } catch (error) {
      log(
        `Error while handling Party Type Individual ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    try {
      scores.rule16 = rules.handleTransactionConvergence(
        transfer,
        payeeHistoricalReceiveData,
      );
    } catch (error) {
      log(
        `Error while handling Transaction Convergence ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    try {
      scores.rule27 = rules.handleTransactionMirroring(
        transfer,
        payeeHistoricalSendData,
        payeeHistoricalReceiveData,
      );
    } catch (error) {
      log(
        `Error while handling Transaction Mirroring ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    try {
      scores.rule30 = rules.handleNewPayeeTransfer(
        transfer,
        payerHistoricalSendData,
      );
    } catch (error) {
      log(
        `Error while handling New Payee ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    try {
      scores.rule63 = rules.handleBenfordsLaw(
        transfer,
        payeeHistoricalReceiveData,
      );
    } catch (error) {
      log(
        `Error while handling Benford's Law ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    handleScores(scores, topic, TransactionID, HTTPTransactionDate);
  } catch (e) {
    console.error(e);
  }
};

export default handleQuoteMessage;
