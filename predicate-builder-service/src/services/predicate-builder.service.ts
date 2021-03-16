import { FunctionDescription } from '../classes/function-description';
import { Predicate } from '../classes/predicate';
import { PredicateExecutionRequest } from '../classes/predicate-execute-request';
import { PredicateExecutionResult } from '../classes/predicate-execution-result';
import { LogicalOperator } from '../enums/logical-operator';
import { Operator } from '../enums/operator';

export class PredicateBuilderService {
  public ProcessPredicate(
    request: PredicateExecutionRequest,
  ): PredicateExecutionResult {
    const fncDescription = this.BuildGroupFunction(request.predicates);

    const result = this.ExecutePredicatesFunction(request, fncDescription);

    return new PredicateExecutionResult(fncDescription, result);
  }

  public BuildGroupFunction(predicates: Predicate[]): FunctionDescription {
    const paths: string[] = [];

    const result = `${predicates
      .map((pred) => {
        const desc = this.BuildPredicateFunction(pred);
        paths.push(...desc.paths);
        return desc.func;
      })
      .join(' ')})`;

    return new FunctionDescription({
      func: `(${result.substr(3)}`,
      paths,
    });
  }

  public BuildPredicateFunction(pred: Predicate): FunctionDescription {
    const logicalOP =
      pred.logicalOperator === LogicalOperator.AND ? '&&' : '||';

    let nested: FunctionDescription | undefined = undefined;

    if (pred.nestedPredicate && pred.nestedPredicate.predicates.length > 0) {
      const nestedLogicalOP =
        pred.nestedPredicate.logicalOperator === LogicalOperator.AND
          ? '&&'
          : '||';
      nested = this.BuildGroupFunction(pred.nestedPredicate.predicates);

      nested.func = ` ${nestedLogicalOP} ${nested.func}`;
    }

    if (pred.dataPropertyPath.toLowerCase().startsWith('data.')) {
      pred.dataPropertyPath = pred.dataPropertyPath.substr(5);
    }

    const paths = [pred.dataPropertyPath];
    let func = '';

    const operation = this.GetPredicateLogic(
      pred.operator,
      `data.${pred.dataPropertyPath}`,
      pred.value,
      pred.not as boolean,
    );

    if (nested) {
      func = `${logicalOP} (${operation}${nested.func})`;
      paths.push(...nested.paths);
    } else {
      func = `${logicalOP} ${operation}`;
    }
    return new FunctionDescription({ func, paths });
  }

  public GetPredicateLogic(
    operator: Operator,
    propertyPath: string,
    value: string,
    not: boolean,
  ): string {
    let result: string = '';
    switch (operator) {
      case Operator.EQUALS:
        result = `${propertyPath} ${not ? '!==' : '==='} "${value}"`;
        break;
      case Operator.GREATERTHAN:
        result = `${propertyPath} ${not ? '<=' : '>'} "${value}"`;
        break;
      // }
      case Operator.GREATERTHANANDEQUALS:
        result = `${propertyPath} ${not ? '<' : '>='} "${value}"`;
        break;
      case Operator.LESSTHAN:
        result = `${propertyPath} ${not ? '>=' : '<'} "${value}"`;
        break;
      case Operator.LESSTHANANDEQUALS:
        result = `${propertyPath} ${not ? '>' : '<='} "${value}"`;
        break;
      case Operator.ISNULL:
        result = `(${propertyPath} ${not ? '!==' : '==='} null ${
          not ? '&&' : '||'
        } ${propertyPath} ${not ? '!==' : '==='} undefined)`;
        break;
      case Operator.CONTAINS:
        result = `${
          not ? '!' : ''
        }${propertyPath}.toString().includes("${value}")`;
        break;
      case Operator.STARTSWITH:
        result = `${
          not ? '!' : ''
        }${propertyPath}.toString().startsWith("${value}")`;
        break;
      case Operator.ENDSWITH:
        result = `${
          not ? '!' : ''
        }${propertyPath}.toString().endsWith("${value}")`;
        break;
    }

    if (result === '') {
      throw new Error(
        `Failed to build predicate - Operator used ("${operator}") is currently not supported`,
      );
    } else {
      return result;
    }
  }

  public ExecutePredicatesFunction(
    req: PredicateExecutionRequest,
    fncDesc: FunctionDescription,
  ): string {
    const returnIfTrue =
      req.outputIfTrue !== undefined
        ? '"' + req.outputIfTrue.toString() + '"'
        : '"true"';

    const returnIfFalse =
      req.outputIfFalse !== undefined
        ? '"' + req.outputIfFalse.toString() + '"'
        : '"false"';

    const functionString = `((data) => {

${this.GetPathValidation(fncDesc.paths)}

if (${fncDesc.func}) {
    return ${returnIfTrue};
} else {
    return ${returnIfFalse};
}
})(JSON.parse('${JSON.stringify(req.data)}'))`;

    let result;

    try {
      result = eval(functionString);
    } catch (error) {
      throw new Error(
        `Failed while executing predicate request\n${error.message}`,
      );
    }

    return result;
  }

  public GetPathValidation(paths: string[]): string {
    let uniquePaths: string[] = [];

    paths.forEach((path) => {
      const pathParts = path.split('.');
      let pathPartial = '';

      pathParts.forEach((pPart) => {
        pathPartial += pathPartial === '' ? pPart : '.' + pPart;
        if (!uniquePaths.includes(pathPartial)) {
          uniquePaths.push(pathPartial);
        }
      });
    });

    return `${uniquePaths
      .map((p) => `data.${p}`)
      .map((uPath) => {
        const lastPropFlag = uPath.lastIndexOf('.');
        const obj = uPath.substring(0, lastPropFlag);
        const prop = uPath.substring(lastPropFlag + 1);
        return `if(!${obj}.hasOwnProperty('${prop}')) {\n\tthrow new Error('Data Property Path specified does not exist on the data provided: "${obj}.${prop}"')\n};`;
      })
      .join('\n\n')}`;
  }
}
