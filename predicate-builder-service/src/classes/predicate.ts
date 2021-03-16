import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';
import { NestedPredicate } from './nested-predicate';

export class Predicate {
  logicalOperator: LogicalOperator = LogicalOperator.AND;

  dataPropertyPath: string = '';
  operator: Operator = Operator.EQUALS;
  value: string = '';
  not? = false;

  nestedPredicate?: NestedPredicate;

  constructor(init: Partial<Predicate>) {
    if (
      !init.logicalOperator ||
      LogicalOperator[init.logicalOperator] === undefined
    ) {
      throw new Error(
        'Could not create predicate - Logical operator was not passed',
      );
    }

    if (!init.operator || Operator[init.operator] === undefined) {
      throw new Error('Could not create predicate - Operator was not passed');
    }

    if (!init.dataPropertyPath || init.dataPropertyPath.trim() === '') {
      throw new Error(
        'Could not create predicate - Data Property Path was not passed',
      );
    }

    Object.assign(this, init);

    this.nestedPredicate = undefined;
    if (
      init.nestedPredicate &&
      init.nestedPredicate.predicates &&
      init.nestedPredicate.predicates.length > 0
    ) {
      this.nestedPredicate = new NestedPredicate(init.nestedPredicate);
    }
  }
}
