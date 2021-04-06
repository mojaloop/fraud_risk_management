import { Request, Response } from 'express';
import { ITransaction } from '../interfaces/iTransaction';
import { BlockListService } from './block-list.service';
import { LoggerService } from './logger.service';
import { RedisClientService } from './redis-client.service';

export class ApplicationService {
  initialized = false;
  redisClient: RedisClientService;
  blockListService: BlockListService;

  constructor() {
    this.redisClient = new RedisClientService();
    this.blockListService = new BlockListService(this.redisClient);
  }

  async initialize() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;

    await this.redisClient.initializeRedis();
  }

  getOnline(response: Response): void {
    response.send('Block List Rule Engine is online.');
  }

  async executeBlockListRule(
    request: Request,
    response: Response,
    debug = false,
  ) {
    if (!request.body) {
      const error =
        'Error: Cannot execute block list rule engine - Transaction was not passed.';

      LoggerService.error(error);

      response.status(406).send(error);

      return;
    }

    const trans: ITransaction = request.body;

    if (!trans.TransactionID) {
      const error =
        'Error: Cannot execute block list rule engine - TransactionID was not populated.';

      LoggerService.error(error);

      response.status(406).send(error);

      return;
    }

    if (!trans.PayerContactNo) {
      const error =
        'Error: Cannot execute block list rule engine - PayerContactNo was not populated.';

      LoggerService.error(error);

      response.status(406).send(error);

      return;
    }

    if (!trans.PayeeContactNo) {
      const error =
        'Error: Cannot execute block list rule engine - PayeeContactNo was not populated.';

      LoggerService.error(error);

      response.status(406).send(error);

      return;
    }

    try {
      const result = await this.blockListService.handleTransactionMessage(trans);

      response.status(200).send(result);
      return;
    } catch (error) {
      const processError = `Error: Failed to process block list rule engine execution request\n${error.message}`;

      LoggerService.error(processError);

      response.status(500).send(processError);
      return;
    }
  }
}
