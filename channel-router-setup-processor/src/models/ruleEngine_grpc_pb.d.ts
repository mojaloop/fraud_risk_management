// package: ruleEngineService
// file: ruleEngine.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ruleEngine_pb from "./ruleEngine_pb";

interface IFlowFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IFlowFileServiceService_ISend;
}

interface IFlowFileServiceService_ISend extends grpc.MethodDefinition<ruleEngine_pb.FlowFileRequest, ruleEngine_pb.FlowFileReply> {
    path: "/org.apache.ruleEngine.processors.grpc.FlowFileService/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ruleEngine_pb.FlowFileRequest>;
    requestDeserialize: grpc.deserialize<ruleEngine_pb.FlowFileRequest>;
    responseSerialize: grpc.serialize<ruleEngine_pb.FlowFileReply>;
    responseDeserialize: grpc.deserialize<ruleEngine_pb.FlowFileReply>;
}

export const FlowFileServiceService: IFlowFileServiceService;

export interface IFlowFileServiceServer extends grpc.UntypedServiceImplementation {
    send: grpc.handleUnaryCall<ruleEngine_pb.FlowFileRequest, ruleEngine_pb.FlowFileReply>;
}

export interface IFlowFileServiceClient {
    send(request: ruleEngine_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: ruleEngine_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: ruleEngine_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}

export class FlowFileServiceClient extends grpc.Client implements IFlowFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public send(request: ruleEngine_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: ruleEngine_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: ruleEngine_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ruleEngine_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}
