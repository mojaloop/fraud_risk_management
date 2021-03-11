import { Request, RequestHandler, Response } from 'express';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { PredicateBuilderService } from './predicate-builder.service';

export class ApplicationService {
  predicateBuilderService: PredicateBuilderService;

  constructor() {
    this.predicateBuilderService = new PredicateBuilderService();
  }

  getOnline(request: Request, response: Response): void {
    response.send('Predicate Builder Service is online.');
  }

  executePredicateRequest(
    request: Request,
    response: Response,
    debug = false,
  ): void {
    let reqObject: PredicateExecutionRequest | null = null;

    try {
      if (!request.body) {
        const error = new Error(
          'Cannot execute predicate, no predicate execution request was passed.',
        );

        console.error(error);
        response.status(400).send(error.message);
        return;
      }

      reqObject = new PredicateExecutionRequest(request.body);
    } catch (err) {
      const parseError = new Error(
        'Failed to parse predicate execution request',
      );
      parseError.message += `\n${err.message}`;
      console.error(parseError);
      response.status(500).send(parseError.message);
      return;
    }

    try {
      const predicateResult = this.predicateBuilderService.ProcessPredicate(
        reqObject,
        debug,
      );

      response.status(200).send(predicateResult);
    } catch (error) {
      const processError = new Error(
        'Failed to process predicate execution request',
      );
      processError.message += `\n${error.message}`;
      console.error(processError);
      response.status(500).send(processError.message);
      return;
    }
  }
}
