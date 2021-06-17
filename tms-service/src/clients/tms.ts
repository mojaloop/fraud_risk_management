import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { config } from '../config';

import { TMSClient } from '../../models/tms_grpc_pb';
import { ExecuteRequest, ExecuteResponse } from '../../models/tms_pb';

/**
 * gRPC TMS Service
 */
class TMSService {
  // https://github.com/grpc/grpc-node/issues/54
  private readonly client: TMSClient = new TMSClient(`localhost:${config.grpcport}`, credentials.createInsecure());

  public async execute(param: ExecuteRequest, metadata: Metadata = new Metadata()): Promise<ExecuteResponse> {
    return new Promise((resolve: Resolve<ExecuteResponse>, reject: Reject): void => {
      this.client.execute(param, metadata, (err: ServiceError | null, res: ExecuteResponse) => {
        if (err) {
          return reject(err);
        }

        resolve(res);
      });
    });
  }
}

export const tmsService: TMSService = new TMSService();
