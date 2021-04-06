import { ITransaction } from '../interfaces/iTransaction';
import { RedisClientService } from './redis-client.service';

export class BlockListService {
  redisClientService: RedisClientService;

  constructor(_redisClientService: RedisClientService) {
    this.redisClientService = _redisClientService;
  }

  
  async handleTransactionMessage(jMessage: ITransaction): Promise<string> {
    const payerMsisdn = this.sanitizeNumber(jMessage.PayerContactNo);
    const payeeMsisdn = this.sanitizeNumber(jMessage.PayeeContactNo);

    const payerResult = await this.checkIfBlocked(payerMsisdn, jMessage.TransactionID);
    const payeeResult = await this.checkIfBlocked(payeeMsisdn, jMessage.TransactionID, false);

    return `${payerResult}\n${payeeResult}`;
  }

  /**
   * Makes sure the MSISDN starts with +233
   */
  sanitizeNumber(number: string): string {
    let toReturn = number;
    if (number.startsWith('0')) {
      toReturn = number.substring(1);
      toReturn = `+233${toReturn}`;
    } else if (!number.startsWith('+')) {
      toReturn = `+${number}`;
    }
    return toReturn;
  }

  async checkIfBlocked(msisdn: string, txID: string, payer = true) {
    const blocked = await this.redisClientService.isBlocked(msisdn);
    const isBlocked = blocked !== 0;
    const result = `[BLOCKLIST][${payer ? 'Payer' : 'Payee'} blocked ${isBlocked}] TransactionID: ${txID} MSISDN: ${msisdn} ${
      isBlocked ? 'is blocked' : 'is not blocked'
    }`;
    return result;
  }

}
