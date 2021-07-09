/* eslint-disable @typescript-eslint/no-unsafe-call */
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { RuleRequest } from '../classes/rule-request';
import { IFlowFileServiceServer, FlowFileServiceService } from '../models/nifi_grpc_pb';
import { FlowFileReply, FlowFileRequest } from '../models/nifi_pb';
import { LoggerService } from '../services/logger.service';
import { handleTransaction } from '../services/logic.service';

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class Execute implements IFlowFileServiceServer {
  [method: string]: UntypedHandleCall;

  public async send(call: ServerUnaryCall<FlowFileRequest, FlowFileReply>, callback: sendUnaryData<FlowFileReply>): Promise<void> {
    const res: FlowFileReply = new FlowFileReply();

    let request!: RuleRequest;
    LoggerService.log('Start - Handle execute request');
    try {
      const reqData = Buffer.from(call.request.getContent_asB64(), 'base64').toString();
      LoggerService.log(`gRPC string request received with data: ${reqData ?? ''}`);
      const message = JSON.parse(reqData);
      request = new RuleRequest(message.transaction, message.typologies);
    } catch (parseError) {
      const failMessage = 'Failed to parse execution request.';
      LoggerService.error(failMessage, parseError, 'ApplicationService');
      LoggerService.log('End - Handle execute request');
      res.setResponsecode(0);
      res.setBody(failMessage);
      callback(null, res);
      return;
    }

    try {
      await handleTransaction(request, callback);
    } catch (err) {
      const failMessage = 'Failed to process execution request.';
      LoggerService.error(failMessage, err, 'ApplicationService');
      res.setResponsecode(0);
      res.setBody(failMessage);
      callback(null, res);
      return;
    } finally {
      LoggerService.log('End - Handle execute request');
    }
  }
}

export default {
  service: FlowFileServiceService, // Service interface
  handler: new Execute(), // Service interface definitions
};
