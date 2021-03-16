import { Request, Response } from 'express';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { KafkaService } from './kafka.service';
import { PredicateBuilderService } from './predicate-builder.service';

export class ApplicationService {
  predicateBuilderService: PredicateBuilderService;
  kafkaService: KafkaService;

  constructor() {
    this.predicateBuilderService = new PredicateBuilderService();
    this.kafkaService = new KafkaService();
  }

  getOnline(response: Response): void {
    response.send('Predicate Builder Service is online.');
  }

  executePredicateRequest(
    request: Request,
    response: Response,
    debug = false,
  ): void {
    if (!request.body) {
      const error = new Error(
        'Cannot execute predicate, no predicate execution request was passed.',
      );

      this.kafkaService.log('Error', error.message);
      response.status(406).send(error.message);
      return;
    }

    let reqObject: PredicateExecutionRequest;

    try {
      reqObject = new PredicateExecutionRequest(request.body);
    } catch (err) {
      const parseError = new Error(
        'Failed to parse predicate execution request',
      );
      parseError.message += `\n${err.message}`;

      this.kafkaService.log('Error', parseError.message);

      response.status(500).send(parseError.message);
      return;
    }

    try {
      const predicateResult = this.predicateBuilderService.ProcessPredicate(
        reqObject,
      );

      const logMessage = `Paths: \n[${predicateResult.paths.join(
        ', ',
      )}]\n\nFunction: \n${predicateResult.function}\n\nResult: ${
        predicateResult.result
      }`;

      this.kafkaService.log(
        'Debug',
        `Processed inbound request with result:\n${logMessage}`,
      );

      let responseMessage = '';

      if (debug) {
        responseMessage = logMessage;
      } else {
        responseMessage = predicateResult.result;
      }

      this.kafkaService.publishResult(
        reqObject.outputTopic,
        predicateResult.result,
      );

      response.status(200).send(responseMessage);
    } catch (error) {
      const processError = new Error(
        'Failed to process predicate execution request',
      );
      processError.message += `\n${error.message}`;

      this.kafkaService.log('Error', processError.message);
      response.status(500).send(processError.message);
      return;
    }
  }
}
