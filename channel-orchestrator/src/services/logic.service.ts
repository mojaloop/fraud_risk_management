
import { RedisClientService } from './redis-client.service';
import http from 'http';
import { forkJoin } from 'rxjs';
import { ExecuteRequest } from '../classes/execute-request';
import { config } from '../config';
import { RuleRequest } from '../classes/rule-request';

export class LogicService {
  redisClient: RedisClientService;

  constructor() {
    this.redisClient = new RedisClientService();
  }

  async handleTransaction(req: ExecuteRequest) {
    let result!: string;
    let rules: Map<string, any> = new Map();
    const typologyMap = JSON.parse(config.typologyMap);

    // Deduplicate all rules
    typologyMap.forEach((typology: any) => {
      if (typology.rules) {
        typology.rules.forEach((rule: any) => {
          const ruleName = Object.keys(rule)[0];
          const typologyName = Object.keys(typology)[0];
          const typologyEndpoint = typology[typologyName];
          if (rules.has(ruleName)) {
            rules.get(ruleName)["typologies"].set(typologyName, typologyEndpoint);
          } else {
            let tempTypologies = new Map<string, string>();
            tempTypologies.set(typologyName, typologyEndpoint);
            rule["typologies"] = tempTypologies;
            rules.set(ruleName, rule);
          }
        });
      }
    });

    let ruleCounter = 0;
    // Send transaction to all rules
    await forkJoin(Array.from(rules.entries()).map(rule => {
      ruleCounter++;
      return this.sendRule(rule, req);
    })).toPromise();

    result = `[ChannelOrchestrator][Result] ${ruleCounter} rules initiated for transaction ID: ${req.TransactionID}`;

    return result;
  }

  async sendRule(rule: any, req: ExecuteRequest) {
    const ruleName = rule[0];
    const ruleEndpoint = rule[1][ruleName];
    const typologies = rule[1]["typologies"];
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
          'Content-Length': request.length
        }
      }

      const req = http.request(endpoint, options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
          process.stdout.write(d);
          resolve();
        })
      })

      req.on('error', error => {
        console.error(error);
        resolve(error);
      })

      req.write(request)
      req.end()
    });
  }
}

