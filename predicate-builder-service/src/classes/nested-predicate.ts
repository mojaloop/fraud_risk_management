import { LogicalOperator } from '../enums/logical-operator';
import { Predicate } from './predicate';

export class NestedPredicate {
  logicalOperator: LogicalOperator;
  predicates: Predicate[];

  constructor(init: NestedPredicate) {
    if (LogicalOperator[init.logicalOperator] === undefined) {
      throw new Error(
        'Could not create nested predicate, logical operator passed is neither a AND or OR',
      );
    }

    if (!init.predicates || !Array.isArray(init.predicates)) {
      throw new Error(
        'Could not create nested predicate, predicates passed is not an array of predicates',
      );
    }

    if (init.predicates.length === 0) {
      throw new Error(
        'Could not create nested predicate, predicates passed is an empty array',
      );
    }

    this.logicalOperator = init.logicalOperator;

    this.predicates = [];

    init.predicates.forEach((pred) =>
      this.predicates.push(new Predicate(pred)),
    );
  }
}
