import { config } from '../config';
import { LoggerService } from './logger.service';
import { RuleRequest } from '../classes/rule-request';
import { NetworkMap, Rule, Typology } from '../classes/network-map';
import { FlowFileReply, FlowFileRequest } from '../models/nifi_pb';
import { sendUnaryData } from '@grpc/grpc-js';
import { ruleEngineService as typologyEngineService } from '../clients/rule-engine.client';
import { ArangoDBService } from '../helpers/arango-client.service';
import { handleAccountDormancy } from '../helpers/account-dormancy';
import { RuleResult } from '../interfaces/ruleResult';

const arangodb = new ArangoDBService();

export const handleTransaction = async (req: RuleRequest, callback: sendUnaryData<FlowFileReply>) => {

  const transactionId = req.transaction.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification;
  
  const transactionInfoQuery = `
    FOR doc IN ${config.collectionName}
      FILTER doc._id == "Transactions/${transactionId}"
      RETURN doc
  `;
  // const transactionData = await arangodb.query(transactionInfoQuery);
  const transactionData: any[] = []; // Replace once arango integration is completed

  const ruleResult: RuleResult = {
    rule: 'Rule-003',
    result: false,
  };
  if (
    transactionData &&
    transactionData[0] &&
    transactionData[0].length > 0
  ) {
    const payeeId = transactionData[0][0]._to;

    const payeeTransactionsQuery = `
      FOR v, e, p IN 2..2 OUTBOUND
        "${payeeId}"
        GRAPH "${config.graphName}"
        FILTER e._to == "${payeeId}"
        return p
      `;

    const payeeAllTransactions = await arangodb.query(
      payeeTransactionsQuery,
    );

    LoggerService.log(
      `payeeAllTransactions ${JSON.stringify(payeeAllTransactions)}`,
    );

    const ruleCondition = handleAccountDormancy(
      req.transaction,
      payeeAllTransactions,
    );
    ruleResult.result = ruleCondition;
  }

  const res: FlowFileReply = new FlowFileReply();
  const resultMessage = `Result for Rule 003 is ${ruleResult.result}`
  await sendRule(ruleResult, req);
  res.setBody(resultMessage);
  res.setResponsecode(1);
  callback(null, res);
};

const sendRule = async (rule: RuleResult, req: RuleRequest) => {
  const toSend = `{"transaction":${JSON.stringify(req)}, "ruleResult":${JSON.stringify(rule)}}`;

  // Uncomment this to send gRPC request to Rule Engines
  let typologyRequest = new FlowFileRequest();
  let objJsonB64 = Buffer.from(JSON.stringify(toSend)).toString("base64");
  typologyRequest.setContent(objJsonB64);
  await typologyEngineService.send(typologyRequest);
};
