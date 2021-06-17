/* eslint-disable @typescript-eslint/no-unsafe-call */
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { logger } from '../utils';
import { ITMSServer, TMSService } from '../../models/tms_grpc_pb';
import { ExecuteRequest, ExecuteResponse } from '../../models/tms_pb';

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Execute implements ITMSServer {
  [method: string]: UntypedHandleCall;

  public execute(call: ServerUnaryCall<ExecuteRequest, ExecuteResponse>, callback: sendUnaryData<ExecuteResponse>): void {
    try {
      const body = call.request.getBody();
      const res: ExecuteResponse = new ExecuteResponse();
      res.setBody(body);

      callback(null, res);
    } catch (e) {
      logger.error(e);
    }
  }
}

export default {
  service: TMSService, // Service interface
  handler: new Execute(), // Service interface definitions
};
