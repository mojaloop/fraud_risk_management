import { Predicate } from './predicate';

export class PredicateExecutionRequest {
  outputTopic: string = '';
  outputIfTrue?: string = 'true';
  outputIfFalse?: string = 'false';

  data: any;
  predicates: Predicate[] = [];

  constructor(init: Partial<PredicateExecutionRequest>) {
    if (!init.outputTopic) {
      throw new Error('Could not parse request - No output topic was passed');
    }

    if (!init.data) {
      throw new Error('Could not parse request - No data was passed');
    }

    Object.assign(this, init);

    this.predicates = [];
    if (
      !init.predicates ||
      !Array.isArray(init.predicates) ||
      init.predicates.length === 0
    ) {
      throw new Error('Could not parse request - No predicates were passed.');
    }
    init.predicates.forEach((pred) => {
      this.predicates.push(new Predicate(pred));
    });
  }
}
