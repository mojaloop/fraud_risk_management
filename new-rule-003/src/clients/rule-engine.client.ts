import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { FlowFileServiceClient } from '../models/nifi_grpc_pb';
import { FlowFileReply, FlowFileRequest } from '../models/nifi_pb';
import { config } from '../config';

/**
 * gRPC Rule Engine Client Service
 */
class RuleEngineService {
  private readonly client: FlowFileServiceClient = new FlowFileServiceClient(
    `${config.ruleEndpoint}:${config.restPort}`,
    credentials.createInsecure(),
  );

  public async send(param: FlowFileRequest, metadata: Metadata = new Metadata()): Promise<FlowFileReply> {
    return new Promise((resolve: Resolve<FlowFileReply>, reject: Reject): void => {
      this.client.send(param, metadata, (err: ServiceError | null, res: FlowFileReply) => {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  }
}

export const ruleEngineService: RuleEngineService = new RuleEngineService();
