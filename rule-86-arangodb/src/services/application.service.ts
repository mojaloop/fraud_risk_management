import { Request, Response } from 'express';
import quoteConsumer from '../consumers/quote-consumer';

export class ApplicationService {
  getOnline(response: Response): void {
    response.send('Rule 86 ArangoDB is online.');
  }

  async executeRequest(
    request: Request,
    response: Response,
  ): Promise<void> {
    const res = await quoteConsumer.handleQuoteMessage(JSON.stringify(request.body));
    response.status(200).send(res);
  }
}