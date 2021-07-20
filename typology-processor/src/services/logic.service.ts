import http from 'http';
import { forkJoin } from 'rxjs';
import { config } from '../config';
import { LoggerService } from './logger.service';
import { CustomerCreditTransferInitiation } from '../classes/iPain001Transaction';
import { NetworkMap, Rule, Typology } from '../classes/network-map';
import { FlowFileReply, FlowFileRequest } from '../models/nifi_pb';
import { sendUnaryData } from '@grpc/grpc-js';
import { redisAppendJson, redisGetJson } from '../clients/redis-client';
import { RuleResult } from '../classes/rule-result';

export const handleTransaction = async (req: CustomerCreditTransferInitiation, networkMap: NetworkMap, ruleResult: RuleResult, callback: sendUnaryData<FlowFileReply>) => {
  let typologyCounter = 0;
  for (const channel of networkMap.transactions[0].channels) {
    for (const typoplogy of channel.typologies.filter(typo => typo.rules.some(r => r.rule_name === ruleResult.name))) {
      // will loop through every Typology here
      typologyCounter++;
      for (const rule of typoplogy.rules) {
        // determine rule completion

      }
    }
  }

  const result = `${typologyCounter} typologies initiated for transaction ID: ${req.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification}`;
  LoggerService.log(result);
  const res: FlowFileReply = new FlowFileReply();
  res.setBody(result);
  res.setResponsecode(1);
  callback(null, res);
};

const executeRequest = async (
  request: CustomerCreditTransferInitiation,
  typology: Typology,
  ruleResult: RuleResult
): Promise<void> => {

  try {
    let score: string = '';
    try {
      const transactionID = request.PaymentInformation.CreditTransferTransactionInformation.PaymentIdentification.EndToEndIdentification;
      const cacheKey = `${transactionID}_${typology.typology_id}`
      var ruleResults = await redisGetJson(cacheKey);

      if (!ruleResults || ruleResults.length === 0)
        ruleResults = [`{"name": "${ruleResult.name}", "result": ${ruleResult.result}}`];
      else
        ruleResults.push(`{"name": "${ruleResult.name}", "result": ${ruleResult.result}}`);

      // check if all results for this typology are found 
      if (ruleResults.length < typology.rules.length) {
        var saveResult = await redisAppendJson(cacheKey, ruleResults);
        //response.status(200).send('All rules not yet processed for Typology 28');
        return;
      }

      // Convert rule results to Score object
      const scores: Typology28Type = {};
      ruleResults.forEach((rule: string) => {
        const jRule = JSON.parse(rule);
        scores[jRule.name] = jRule.result;
      });

      // Calculate score for Typology-28
      // See https://lextego.atlassian.net/browse/ACTIO-197
      score = this.handleScores(scores, transfer.transaction.TransactionID, transfer.transaction.HTTPTransactionDate);
    } catch (e) {
      console.error(e);
    }

    var res = await this.sendScore(score);

    response.status(200).send(`${score}\r\nChannel Score Response:\r\n${res}`);
  } catch (error) {
    const processError = new Error(
      'Failed to process Typology-28 request',
    );
    processError.message += `\n${error.message}`;

    LoggerService.error(`[ERROR] ${processError.message}`);
    response.status(500).send(processError.message);
    return;
  }
}

const sendRule = async (rule: Rule, req: CustomerCreditTransferInitiation) => {
  const ruleEndpoint = `${config.ruleEndpoint}/${rule.rule_name}/${rule.rule_version}`; // rule.ruleEndpoint;
  // const ruleRequest: RuleRequest = new RuleRequest(req, rule.typologies);
  const toSend = `{"transaction":${JSON.stringify(req)}, "typologies":${JSON.stringify(rule.typologies)}}`;

  // Uncomment this to send gRPC request to Rule Engines
  // let ruleRequest = new FlowFileRequest();
  let objJsonB64 = Buffer.from(JSON.stringify(toSend)).toString("base64");
  // ruleRequest.setContent(objJsonB64);
  // ruleEngineService.send(ruleRequest);

  await executePost(ruleEndpoint, toSend);
};

// Submit the score to the Rule Engine
const executePost = (endpoint: string, request: string): Promise<void | Error> => {
  return new Promise((resolve) => {
    const options: http.RequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': request.length,
      },
    };

    const req = http.request(endpoint, options, (res) => {
      LoggerService.log(`Rule response statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        LoggerService.trace(`StatusCode != 200, request:\r\n${request}`);
      }

      res.on('data', (d) => {
        LoggerService.log(`Rule response data: ${d.toString()}`);
        resolve();
      });
    });

    req.on('error', (error) => {
      LoggerService.error(`Rule response Error data: ${error}`);
      LoggerService.trace(`Request:\r\n${request}`);
      resolve(error);
    });

    req.write(request);
    req.end();
  });
};

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
