import { ExecuteRequest } from '../classes/execute-request';
import { Typology214Type } from '../classes/Typology214Type';
import { RedisClientType } from '../enums/redis-client';
import { RedisClientService } from './redis-client.service';
import { RulesService } from './rules.service';

export class LogicService {
  redisClient: RedisClientService;
  rulesService: RulesService;
  constructor() {
    this.redisClient = new RedisClientService();
    this.rulesService = new RulesService();
  }

  async handleTransaction(req: ExecuteRequest) {

    const sourceHistoricalSendDataJSON = await this.redisClient.get(
      RedisClientType.Sender,
      req.ILPSourceAccountAddress,
    );
    const payeeHistoricalReceiveDataJSON = await this.redisClient.get(
      RedisClientType.Receiver,
      req.ILPDestinationAccountAddress,
    );
    const payeeHistoricalSendDataJSON = await this.redisClient.get(
      RedisClientType.Sender,
      req.ILPDestinationAccountAddress,
    );

    const sourceHistoricalSendData = JSON.parse(sourceHistoricalSendDataJSON);
    const payeeHistoricalSendData = JSON.parse(payeeHistoricalSendDataJSON);
    const payeeHistoricalReceiveData = JSON.parse(payeeHistoricalReceiveDataJSON);

    // See https://lextego.atlassian.net/browse/AM-305
    const scores: Typology214Type = new Typology214Type();
    try {
      scores.rule12 = this.rulesService.handleIndividual(req);
    } catch (error) {

      throw new Error(`Error while handling Party Type Individual ${req.TransactionID}, with message: \r\n${error}`)
    }
    try {
      scores.rule27 = this.rulesService.handleTransactionMirroring(
        req,
        payeeHistoricalSendData,
        payeeHistoricalReceiveData,
      );
    } catch (error) {
      throw new Error(
        `Error while handling Transaction Mirroring ${req.TransactionID}, with message: \r\n${error}`
      );
    }
    try {
      scores.rule30 = this.rulesService.handleNewPayeeTransfer({
        historicalData: sourceHistoricalSendDataJSON,
        req,
      });
    } catch (error) {
      throw new Error(
        `Error while handling New payee transfer ${req.TransactionID}, with message: \r\n${error}`
      );
    }
    try {
      scores.rule48 = this.rulesService.handleLargeTransactionPayer(
        req,
        sourceHistoricalSendData,
      );
    } catch (error) {
      throw new Error(
        `Error while handling Large Transaction Payer ${req.TransactionID}, with message: \r\n${error}`
      );
    }
    try {
      scores.rule78 = this.rulesService.handleCashWithdraw(req);
    } catch (error) {
      throw new Error(
        `Error while handling Cash Withdraw ${req.TransactionID}, with message: \r\n${error}`
      );
    }

    return this.handleScores(scores, req.TransactionID, req.HTTPTransactionDate);
  }


  handleScores(
    scores: Typology214Type,
    TransactionID: string,
    transactionDate: string,
  ): string {
    const score =
      (scores.rule12 ? 0.2 : 0) +
      (scores.rule27 ? 0.2 : 0) +
      (scores.rule30 ? 0.2 : 0) +
      (scores.rule48 ? 0.2 : 0) +
      (scores.rule78 ? 0.2 : 0);

    return `"typology":"typology-214","transactionID":"${TransactionID}","score":${score},"createDate":${transactionDate},"processedDate":${Date.now()},
  "textResult":"Typology 214 score is ${score}, Reason: ${(scores.rule3 ? 'Rule 3, ' : '') +
      (scores.rule12 ? 'Rule 12, ' : '') +
      (scores.rule27 ? 'Rule 27, ' : '') +
      (scores.rule30 ? 'Rule 30, ' : '') +
      (scores.rule48 ? 'Rule 48, ' : '') +
      (scores.rule78 ? 'Rule 78' : '') +
      '"}'
      }`
  };

}
