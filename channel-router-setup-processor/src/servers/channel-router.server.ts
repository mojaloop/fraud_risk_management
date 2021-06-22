/* eslint-disable @typescript-eslint/no-unsafe-call */
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ExecuteRequest } from '../classes/execute-request';
import { IFlowFileServiceServer, FlowFileServiceService } from '../models/channelRouter_grpc_pb';
import { FlowFileReply, FlowFileRequest } from '../models/channelRouter_pb';
import { LoggerService } from '../services/logger.service';
import { LogicService } from '../services/logic.service';

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Execute implements IFlowFileServiceServer {
  [method: string]: UntypedHandleCall;

  public async send(call: ServerUnaryCall<FlowFileRequest, FlowFileReply>, callback: sendUnaryData<FlowFileReply>): Promise<void> {
    const body = call.request.toObject();
    const res: FlowFileReply = new FlowFileReply();

    let request!: ExecuteRequest;
    LoggerService.log('Start - Handle execute request');
    try {
      const reqData = Buffer.from(body.content.toString(), 'base64').toString();
      request = new ExecuteRequest(JSON.parse(reqData));
    } catch (parseError) {
      const failMessage = 'Failed to parse execution request.';

      LoggerService.error(failMessage, parseError, 'ApplicationService');

      LoggerService.log('End - Handle execute request');
      res.setResponsecode(0);
      callback(null, res);
      return;
    }

    try {
      const logicService = new LogicService();
      const result = await logicService.handleTransaction(request);
      LoggerService.log(result);
      res.setResponsecode(1);
      callback(null, res);
    } catch (err) {
      const failMessage = 'Failed to process execution request.';
      LoggerService.error(failMessage, err, 'ApplicationService');
      res.setResponsecode(0);
      callback(null, res);
    } finally {
      LoggerService.log('End - Handle execute request');
    }
  }
}

export default {
  service: FlowFileServiceService, // Service interface
  handler: new Execute(), // Service interface definitions
};
