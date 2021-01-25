import * as kafka from 'kafka-node';
import { RedisClient } from 'redis';
import rules from './rules';
import { publish } from './producer';
import { get } from './redis-client';
import { log } from './helper';

class typology214Type {
  rule12: boolean | undefined;
  rule27: boolean | undefined;
  rule30: boolean | undefined;
  rule48: boolean | undefined;
  rule78: boolean | undefined;
}

// Composed probability for typology 214 = (012.p+027.p+030.p+048.p+078.p)
const handleScores = (scores: any, topic: string, TransactionID: string, transactionDate: string) => {
  const score =
    (scores.rule12 ? 0.2 : 0)
    + (scores.rule27 ? 0.2 : 0)
    + (scores.rule30 ? 0.2 : 0)
    + (scores.rule48 ? 0.2 : 0)
    + (scores.rule78 ? 0.2 : 0);

  publish(topic, `"typology":"typology-214","transactionID":"${TransactionID}","score":"${score}","createDate":${transactionDate},
  "textResult":"Typology 214 score is ${score}, Reason: ${(scores.rule3 ? 'Account Dormancy - Payee, ' : '')
    + (scores.rule12 ? 'Party Type Individual, ' : '')
    + (scores.rule27 ? 'Transaction Mirroring, ' : '')
    + (scores.rule30 ? 'New Payee, ' : '')
    + (scores.rule48 ? 'Large Transaction - Payer, ' : '')
    + (scores.rule78 ? 'Cash Withdrawl' : '')
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
    const { TransactionID, ILPSourceAccountAddress, ILPDestinationAccountAddress, HTTPTransactionDate } = transfer;
    const sourceHistoricalSendDataJSON = await get(senderClient, ILPSourceAccountAddress);
    const payeeHistoricalReceiveDataJSON = await get(receiverClient, ILPDestinationAccountAddress);
    const payeeHistoricalSendDataJSON = await get(senderClient, ILPDestinationAccountAddress);

    const sourceHistoricalSendData = JSON.parse(sourceHistoricalSendDataJSON);
    const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
    const payeeHistoricalReceiveData = JSON.parse(payeeHistoricalReceiveDataJSON);
    // See https://lextego.atlassian.net/browse/ACTIO-199
    const scores: typology214Type = new typology214Type();

    try { scores.rule12 = rules.handleIndividual(transfer); }
    catch (error) {
      log(`Error while handling Party Type Individual ${TransactionID}, with message: \r\n${error}`, topic)
    }
    try { scores.rule27 = rules.handleTransactionMirroring(transfer, payeeHistoricalSendData, payeeHistoricalReceiveData); }
    catch (error) {
      log(`Error while handling Transaction Mirroring ${TransactionID}, with message: \r\n${error}`, topic)
    }
    try { scores.rule30 = rules.handleNewPayeeTransfer({ historicalData: sourceHistoricalSendDataJSON, transfer }); }
    catch (error) {
      log(`Error while handling New payee transfer ${TransactionID}, with message: \r\n${error}`, topic)
    }
    try { scores.rule48 = rules.handleLargeTransactionPayer(transfer, sourceHistoricalSendData); }
    catch (error) {
      log(`Error while handling Large Transaction Payer ${TransactionID}, with message: \r\n${error}`, topic)
    }
    try { scores.rule78 = rules.handleCashWithdraw(transfer); }
    catch (error) {
      log(`Error while handling Cash Withdraw ${TransactionID}, with message: \r\n${error}`, topic)
    }

    handleScores(scores, topic, TransactionID, HTTPTransactionDate);
  } catch (e) {
    console.error(e);
  }
};


export default handleQuoteMessage;
