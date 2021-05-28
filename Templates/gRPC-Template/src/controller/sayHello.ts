import { ListValue, Struct, Value } from 'google-protobuf/google/protobuf/struct_pb';

import { HelloRequest, HelloResponse } from '../../models/helloworld_pb';
import { clientService } from '../clientService';
import { logger } from '../utils';

const param: HelloRequest = new HelloRequest();

const SayHello = async (): Promise<string> => {
  /**
   * rpc sayHello with Promise
   */
  const sayHello: HelloResponse = await clientService.sayHello(param);
  logger.info('sayHello:', sayHello.getMessage());
  // logger.info('sayHelloStruct:', (<Struct>sayHello.getParamStruct()).toJavaScript());
  // logger.info('sayHelloListValue:', (<ListValue>sayHello.getParamListValue()).toJavaScript());
  const value: Value | undefined = sayHello.getParamValue();
  if (value) {
    logger.info('sayHelloValue:', value.toJavaScript());
  }

  return sayHello.getMessage();
};

export default SayHello;
