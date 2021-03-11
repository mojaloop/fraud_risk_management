export class FunctionDescription {
  paths: string[] = [];
  func: string = '';

  constructor(init: Partial<FunctionDescription>) {
      Object.assign(this, init);
  }
}
