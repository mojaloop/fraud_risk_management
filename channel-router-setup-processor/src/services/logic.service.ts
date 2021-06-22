import { RedisClientService } from './redis-client.service';
import http from 'http';
import { forkJoin } from 'rxjs';
import { ExecuteRequest } from '../classes/execute-request';
import { config } from '../config';
import { RuleRequest } from '../classes/rule-request';
import { Rule, Typology, TypologyMap } from '../classes/typology-map';
import { LoggerService } from './logger.service';

export class LogicService {

  constructor() {
  }

  async handleTransaction(req: ExecuteRequest) {
    const rules: Rule[] = new Array<Rule>();
    const typologyMap = Object.assign(
      new Array<TypologyMap>(),
      JSON.parse(config.networkMap),
    );

    // Deduplicate all rules
    for (const typology of typologyMap) {
      if (typology.rules) {
        for (const rule of typology.rules) {
          const ruleIndex = rules.findIndex(
            (r) => r.ruleName === rule.ruleName,
          );
          if (ruleIndex > -1) {
            rules[ruleIndex].typologies.push(
              new Typology(typology.typologyName, typology.typologyEndpoint),
            );
          } else {
            const tempTypologies = Array<Typology>();
            tempTypologies.push(
              new Typology(typology.typologyName, typology.typologyEndpoint),
            );
            rule.typologies = tempTypologies;
            rules.push(rule);
          }
        }
      }
    }
    // typologyMap.forEach((typology: TypologyMap) => {
    // typology.rules.forEach((rule: Rule) => {
    //   });
    // });

    let ruleCounter = 0;
    // Send transaction to all rules
    await forkJoin(
      rules.map((rule) => {
        ruleCounter++;
        return this.sendRule(rule, req);
      }),
    ).toPromise();

    const result = `[ChannelOrchestrator][Result] ${ruleCounter} rules initiated for transaction ID: ${req.TransactionID}`;
    return result;
  }

  async sendRule(rule: Rule, req: ExecuteRequest) {
    const ruleEndpoint = rule.ruleEndpoint;
    const typologies = rule.typologies;
    const ruleRequest: RuleRequest = new RuleRequest(req, typologies);
    const toSend = `{"transaction":${JSON.stringify(
      req,
    )}, "typologies":${JSON.stringify(typologies)}}`;
    await this.executePost(ruleEndpoint, toSend);
  }

  // Submit the score to the configured Channel Scoring Engine
  private executePost(
    endpoint: string,
    request: string,
  ): Promise<void | Error> {
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
        LoggerService.error(`Request:\r\n${request}`);
        resolve(error);
      });

      req.write(request);
      req.end();
    });
  }
}
