// package: ruleService
// file: rule.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as rule_pb from "./rule_pb";

interface IFlowFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IFlowFileServiceService_ISend;
}

interface IFlowFileServiceService_ISend extends grpc.MethodDefinition<rule_pb.FlowFileRequest, rule_pb.FlowFileReply> {
    path: "/ruleService.FlowFileService/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<rule_pb.FlowFileRequest>;
    requestDeserialize: grpc.deserialize<rule_pb.FlowFileRequest>;
    responseSerialize: grpc.serialize<rule_pb.FlowFileReply>;
    responseDeserialize: grpc.deserialize<rule_pb.FlowFileReply>;
}

export const FlowFileServiceService: IFlowFileServiceService;

export interface IFlowFileServiceServer extends grpc.UntypedServiceImplementation {
    send: grpc.handleUnaryCall<rule_pb.FlowFileRequest, rule_pb.FlowFileReply>;
}

export interface IFlowFileServiceClient {
    send(request: rule_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: rule_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: rule_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}

export class FlowFileServiceClient extends grpc.Client implements IFlowFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public send(request: rule_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: rule_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: rule_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rule_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}
