// package: org.apache.isomessage.processors.grpc
// file: isomessage.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as isomessage_pb from "./isomessage_pb";

interface IFlowFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IFlowFileServiceService_ISend;
}

interface IFlowFileServiceService_ISend extends grpc.MethodDefinition<isomessage_pb.FlowFileRequest, isomessage_pb.FlowFileReply> {
    path: "/org.apache.isomessage.processors.grpc.FlowFileService/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<isomessage_pb.FlowFileRequest>;
    requestDeserialize: grpc.deserialize<isomessage_pb.FlowFileRequest>;
    responseSerialize: grpc.serialize<isomessage_pb.FlowFileReply>;
    responseDeserialize: grpc.deserialize<isomessage_pb.FlowFileReply>;
}

export const FlowFileServiceService: IFlowFileServiceService;

export interface IFlowFileServiceServer extends grpc.UntypedServiceImplementation {
    send: grpc.handleUnaryCall<isomessage_pb.FlowFileRequest, isomessage_pb.FlowFileReply>;
}

export interface IFlowFileServiceClient {
    send(request: isomessage_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: isomessage_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: isomessage_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}

export class FlowFileServiceClient extends grpc.Client implements IFlowFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public send(request: isomessage_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: isomessage_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: isomessage_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: isomessage_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}
