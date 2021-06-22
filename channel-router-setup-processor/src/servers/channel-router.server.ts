/* eslint-disable @typescript-eslint/no-unsafe-call */
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { IFlowFileServiceServer, FlowFileServiceService } from '../models/ruleEngine_grpc_pb';
import { FlowFileReply, FlowFileRequest } from '../models/channelRouter_pb';

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Execute implements IFlowFileServiceServer {
  [method: string]: UntypedHandleCall;

  public send(call: ServerUnaryCall<FlowFileRequest, FlowFileReply>, callback: sendUnaryData<FlowFileReply>): void {
    const body = call.request.toObject();
    const res: FlowFileReply = new FlowFileReply();

    res.setBody(body.toString());

    callback(null, res);
  }
}

export default {
  service: FlowFileServiceService, // Service interface
  handler: new Execute(), // Service interface definitions
};
