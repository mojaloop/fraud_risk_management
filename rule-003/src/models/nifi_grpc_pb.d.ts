// package: org.apache.nifi.processors.grpc
// file: nifi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as nifi_pb from "./nifi_pb";

interface IFlowFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IFlowFileServiceService_ISend;
}

interface IFlowFileServiceService_ISend extends grpc.MethodDefinition<nifi_pb.FlowFileRequest, nifi_pb.FlowFileReply> {
    path: "/org.apache.nifi.processors.grpc.FlowFileService/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nifi_pb.FlowFileRequest>;
    requestDeserialize: grpc.deserialize<nifi_pb.FlowFileRequest>;
    responseSerialize: grpc.serialize<nifi_pb.FlowFileReply>;
    responseDeserialize: grpc.deserialize<nifi_pb.FlowFileReply>;
}

export const FlowFileServiceService: IFlowFileServiceService;

export interface IFlowFileServiceServer extends grpc.UntypedServiceImplementation {
    send: grpc.handleUnaryCall<nifi_pb.FlowFileRequest, nifi_pb.FlowFileReply>;
}

export interface IFlowFileServiceClient {
    send(request: nifi_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: nifi_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: nifi_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}

export class FlowFileServiceClient extends grpc.Client implements IFlowFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public send(request: nifi_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: nifi_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: nifi_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nifi_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}
