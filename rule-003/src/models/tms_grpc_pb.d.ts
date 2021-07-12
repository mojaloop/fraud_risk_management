// package: tmsservice
// file: tms.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tms_pb from "./tms_pb";

interface ITMSService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    execute: ITMSService_IExecute;
}

interface ITMSService_IExecute extends grpc.MethodDefinition<tms_pb.ExecuteRequest, tms_pb.ExecuteResponse> {
    path: "/tmsservice.TMS/Execute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tms_pb.ExecuteRequest>;
    requestDeserialize: grpc.deserialize<tms_pb.ExecuteRequest>;
    responseSerialize: grpc.serialize<tms_pb.ExecuteResponse>;
    responseDeserialize: grpc.deserialize<tms_pb.ExecuteResponse>;
}

export const TMSService: ITMSService;

export interface ITMSServer extends grpc.UntypedServiceImplementation {
    execute: grpc.handleUnaryCall<tms_pb.ExecuteRequest, tms_pb.ExecuteResponse>;
}

export interface ITMSClient {
    execute(request: tms_pb.ExecuteRequest, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
    execute(request: tms_pb.ExecuteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
    execute(request: tms_pb.ExecuteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
}

export class TMSClient extends grpc.Client implements ITMSClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public execute(request: tms_pb.ExecuteRequest, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
    public execute(request: tms_pb.ExecuteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
    public execute(request: tms_pb.ExecuteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tms_pb.ExecuteResponse) => void): grpc.ClientUnaryCall;
}
