import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { config } from '../config';
import { HealthClient } from '../models/health_grpc_pb';
import { HealthCheckRequest, HealthCheckResponse } from '../models/health_pb';
import { LoggerService } from '../services/logger.service';

/**
 * gRPC HealthCheck Service
 */
class HealthCheckService {
  // https://github.com/grpc/grpc-node/issues/54
  private readonly client: HealthClient = new HealthClient(`localhost:${config.grpcport}`, credentials.createInsecure());

  public check(param: HealthCheckRequest, metadata: Metadata = new Metadata()): Promise<HealthCheckResponse> {
    return new Promise((resolve: Resolve<HealthCheckResponse>, reject: Reject): void => {
      this.client.check(param, metadata, (err: ServiceError | null, res: HealthCheckResponse) => {
        if (err) {
          LoggerService.error('healthCheck:', err);
          return reject(err);
        }

        const status: HealthCheckResponse.ServingStatus = res.getStatus();
        if (status !== HealthCheckResponse.ServingStatus.SERVING) {
          return LoggerService.error(`healthCheck: ${status}`);
        }

        LoggerService.log(`healthCheck: ${status}`);

        resolve(res);
      });
    });
  }
}

export const healthService: HealthCheckService = new HealthCheckService();
