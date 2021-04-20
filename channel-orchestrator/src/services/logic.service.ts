
import { RedisClientService } from './redis-client.service';
import http from 'http';
import { forkJoin } from 'rxjs';
import { ExecuteRequest } from '../classes/execute-request';
import { config } from '../config';
import { RuleRequest } from '../classes/rule-request';
import { Rule, TypologyMap } from '../classes/typology-map';

export class LogicService {
  redisClient: RedisClientService;

  constructor() {
    this.redisClient = new RedisClientService();
  }

  async handleTransaction(req: ExecuteRequest) {

    const rules: Rule[] = new Array<Rule>();
    const typologyMap = Object.assign(new Array<TypologyMap>(), JSON.parse(config.typologyMap));

    // Deduplicate all rules
    typologyMap.forEach((typology: TypologyMap) => {
      if (typology.rules) {
        typology.rules.forEach((rule: Rule) => {
          const ruleIndex = rules.findIndex(r => r.ruleName === rule.ruleName);
          if (ruleIndex > -1) {
            rules[ruleIndex].typologies.set(typology.typologyName, typology.typologyEndpoint);
          } else {
            const tempTypologies = new Map<string, string>();
            tempTypologies.set(typology.typologyName, typology.typologyEndpoint);
            rule.typologies = tempTypologies;
            rules.push(rule);
          }
        });
      }
    });

    let ruleCounter = 0;
    // Send transaction to all rules
    await forkJoin(rules.map(rule => {
      ruleCounter++;
      return this.sendRule(rule, req);
    })).toPromise();

    const result = `[ChannelOrchestrator][Result] ${ruleCounter} rules initiated for transaction ID: ${req.TransactionID}`;
    return result;
  }

  async sendRule(rule: Rule, req: ExecuteRequest) {
    const ruleEndpoint = rule.ruleEndpoint;
    const typologies = rule.typologies;
    const ruleRequest: RuleRequest = new RuleRequest(req, typologies);
    await this.executePost(ruleEndpoint, JSON.stringify(ruleRequest));
  }

  // Submit the score to the configured Channel Scoring Engine
  private executePost(endpoint: string, request: string): Promise<void | Error> {
    return new Promise((resolve) => {
      const options: http.RequestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': request.length,
        },
      };

      const req = http.request(endpoint, options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
          process.stdout.write(d);
          resolve();
        });
      });

      req.on('error', error => {
        console.error(error);
        resolve(error);
      });

      req.write(request);
      req.end();
    });
  }
}

