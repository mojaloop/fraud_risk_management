import { config } from '../config';
import { LoggerService } from './logger.service';
import { RuleRequest } from '../classes/rule-request';
import { NetworkMap, Rule, Typology } from '../classes/network-map';
import { FlowFileReply, FlowFileRequest } from '../models/nifi_pb';
import { sendUnaryData } from '@grpc/grpc-js';
import { ruleEngineService } from '../clients/rule-engine.client';
import { ArangoDBService } from '../helpers/arango-client.service';
import { handleAccountDormancy } from '../helpers/account-dormancy';

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

  console.log(req.transaction.PaymentInformation)
  const ruleResult = {
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
    // const response = await axios.post(typology.endpoint, {
    //   transaction: request.transaction,
    // });

  const res: FlowFileReply = new FlowFileReply();
  const resultMessage = `Result for Rule 003 is ${ruleResult.result}`
  res.setBody(resultMessage);
  res.setResponsecode(1);
  callback(null, res);
};

const sendRule = async (rule: Rule, req: RuleRequest) => {
  const ruleEndpoint = `${config.ruleEndpoint}/${rule.rule_name}/${rule.rule_version}`; // rule.ruleEndpoint;
  // const ruleRequest: RuleRequest = new RuleRequest(req, rule.typologies);
  const toSend = `{"transaction":${JSON.stringify(req)}, "typologies":${JSON.stringify(rule.typologies)}}`;

  // Uncomment this to send gRPC request to Rule Engines
  let ruleRequest = new FlowFileRequest();
  let objJsonB64 = Buffer.from(JSON.stringify(toSend)).toString("base64");
  ruleRequest.setContent(objJsonB64);
  ruleEngineService.send(ruleRequest);

  // await executePost(ruleEndpoint, toSend);
};

// // Submit the score to the Rule Engine
// const executePost = (endpoint: string, request: string): Promise<void | Error> => {
//   return new Promise((resolve) => {
//     const options: http.RequestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': request.length,
//       },
//     };

//     const req = http.request(endpoint, options, (res) => {
//       LoggerService.log(`Rule response statusCode: ${res.statusCode}`);
//       if (res.statusCode !== 200) {
//         LoggerService.trace(`StatusCode != 200, request:\r\n${request}`);
//       }

//       res.on('data', (d) => {
//         LoggerService.log(`Rule response data: ${d.toString()}`);
//         resolve();
//       });
//     });

//     req.on('error', (error) => {
//       LoggerService.error(`Rule response Error data: ${error}`);
//       LoggerService.trace(`Request:\r\n${request}`);
//       resolve(error);
//     });

//     req.write(request);
//     req.end();
//   });
// };

function getRuleMap(networkMap: NetworkMap, transactionType: string): Rule[] {
  const rules: Rule[] = new Array<Rule>();
  const painChannel = networkMap.transactions.find((tran) => tran.transaction_type === transactionType);
  if (painChannel && painChannel.channels && painChannel.channels.length > 0)
    for (const channel of painChannel.channels) {
      if (channel.typologies && channel.typologies.length > 0)
        for (const typology of channel.typologies) {
          if (typology.rules && typology.rules.length > 0)
            for (const rule of typology.rules) {
              const ruleIndex = rules.findIndex(
                (r: Rule) => `${r.rule_id}${r.rule_name}${r.rule_version}` === `${rule.rule_id}${rule.rule_name}${rule.rule_version}`,
              );
              if (ruleIndex > -1) {
                rules[ruleIndex].typologies.push(new Typology(typology.typology_id, typology.typology_name, typology.typology_version));
              } else {
                const tempTypologies = Array<Typology>();
                tempTypologies.push(new Typology(typology.typology_id, typology.typology_name, typology.typology_version));
                rule.typologies = tempTypologies;
                rules.push(rule);
              }
            }
        }
    }

  return rules;
}
