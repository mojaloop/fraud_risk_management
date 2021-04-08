import { ExecuteRequest } from '../classes/execute-request';
import { RedisClientService } from './redis-client.service';

export class LogicService {
  redisClient: RedisClientService;

  constructor() {
    this.redisClient = new RedisClientService();
  }

  async handleTransaction(req: ExecuteRequest) {
    let result!: string;

    const sameNumber = req.PayerContactNo === req.PayeeContactNo;

    result = `[<!ProjectName!>][Result][${sameNumber
      .toString()
      .toUpperCase()}] Payer and Payee contact number is${
      sameNumber ? '' : ' not'
    } the same for transaction ID: ${req.TransactionID}`;

    return result;
  }
}
