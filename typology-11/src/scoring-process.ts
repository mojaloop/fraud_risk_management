import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import rules from './rules';
import { publish } from './producer';
import { get } from './redis-client';
import { log } from './helper';

class Typology11Type {
  rule17?: boolean;
  rule27?: boolean;
  rule86?: boolean;
  rule87?: boolean;
}

interface Scores {
  rule17?: boolean;
  rule27?: boolean;
  rule86?: boolean;
  rule87?: boolean;
}

// https://lextego.atlassian.net/browse/ACTIO-198
const handleScores = (
  scores: Scores,
  topic: string,
  TransactionID: string,
  transactionDate: string,
) => {
  const score =
    (scores.rule17 ? 0.25 : 0) +
    (scores.rule27 ? 0.25 : 0) +
    (scores.rule86 ? 0.25 : 0) +
    (scores.rule87 ? 0.25 : 0);

  publish(
    topic,
    `"typology":"typology-11","transactionID":"${TransactionID}","score":${score},"createDate":${transactionDate},"processedDate":${Date.now()},
    "textResult":"Typology 11 score is ${score}, Reason: ${
      (scores.rule17 ? 'Rule 17, ' : '') +
      (scores.rule27 ? 'Rule 27, ' : '') +
      (scores.rule86 ? 'Rule 86, ' : '') +
      (scores.rule87 ? 'Rule 87' : '') +
      '"}'
    }`,
  );

  // publish(topic, `"typology":"typology-11","transactionID":"${TransactionID}","score":${score},"createDate":${transactionDate},
  //   "textResult":"Typology 11 score is ${score}, Reason: ${+ (scores.rule17 ? 'Transaction Divergence, ' : '')
  //   + (scores.rule27 ? 'Transaction Mirroring, ' : '')
  //   + (scores.rule86 ? 'Transaction Between Parties, ' : '')
  //   + (scores.rule87 ? 'Co-located Parties' : '')
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
    const transfer: {
      TransactionID: string;
      ILPSourceAccountAddress: string;
      ILPDestinationAccountAddress: string;
      HTTPTransactionDate: string;
    } = JSON.parse(message.value.toString());

    const {
      TransactionID,
      ILPSourceAccountAddress,
      ILPDestinationAccountAddress,
      HTTPTransactionDate,
    } = transfer;

    const sourceHistoricalSendDataJSON = await get(
      senderClient,
      ILPSourceAccountAddress,
    );

    const payeeHistoricalReceiveDataJSON = await get(
      receiverClient,
      ILPDestinationAccountAddress,
    );

    const payeeHistoricalSendDataJSON = await get(
      senderClient,
      ILPDestinationAccountAddress,
    );

    const sourceHistoricalSendData = JSON.parse(sourceHistoricalSendDataJSON);
    const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
    const payeeHistoricalReceiveData = JSON.parse(
      payeeHistoricalReceiveDataJSON,
    );
    // See https://lextego.atlassian.net/browse/ACTIO-199
    const scores: Scores = new Typology11Type();

    try {
      scores.rule17 = rules.handleTransactionDivergence(
        transfer,
        payeeHistoricalSendData,
      );
    } catch (error) {
      log(
        `Error while handling transaction divergence for ${TransactionID}, with message: \r\n${error}`,
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
      scores.rule86 = await rules.handleTransactionsBetweenParties(
        transfer,
        senderClient,
        sourceHistoricalSendData,
      );
    } catch (error) {
      log(
        `Error while handling Transaction Mirroring ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }
    try {
      scores.rule87 = await rules.handleCoLocatedParties(
        transfer,
        senderClient,
        sourceHistoricalSendData,
      );
    } catch (error) {
      log(
        `Error while handling Co-located Parties ${TransactionID}, with message: \r\n${error}`,
        topic,
      );
    }

    handleScores(scores, topic, TransactionID, HTTPTransactionDate);
  } catch (e) {
    console.error(e);
  }
};

export default handleQuoteMessage;
