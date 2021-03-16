import { FunctionDescription } from "./function-description";

export class PredicateExecutionResult {
    
    function: string;
    paths: string[];
    result: string;

    constructor(functionDesc: FunctionDescription, result: string) {
        this.function = functionDesc.func;
        this.paths = functionDesc.paths;
        this.result = result;
    }
}
