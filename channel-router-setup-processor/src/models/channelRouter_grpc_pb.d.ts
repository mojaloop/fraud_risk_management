// package: channelRouterService
// file: channelRouter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as channelRouter_pb from "./channelRouter_pb";

interface IFlowFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IFlowFileServiceService_ISend;
}

interface IFlowFileServiceService_ISend extends grpc.MethodDefinition<channelRouter_pb.FlowFileRequest, channelRouter_pb.FlowFileReply> {
    path: "/channelRouterService.FlowFileService/Send";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<channelRouter_pb.FlowFileRequest>;
    requestDeserialize: grpc.deserialize<channelRouter_pb.FlowFileRequest>;
    responseSerialize: grpc.serialize<channelRouter_pb.FlowFileReply>;
    responseDeserialize: grpc.deserialize<channelRouter_pb.FlowFileReply>;
}

export const FlowFileServiceService: IFlowFileServiceService;

export interface IFlowFileServiceServer extends grpc.UntypedServiceImplementation {
    send: grpc.handleUnaryCall<channelRouter_pb.FlowFileRequest, channelRouter_pb.FlowFileReply>;
}

export interface IFlowFileServiceClient {
    send(request: channelRouter_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: channelRouter_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    send(request: channelRouter_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}

export class FlowFileServiceClient extends grpc.Client implements IFlowFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public send(request: channelRouter_pb.FlowFileRequest, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: channelRouter_pb.FlowFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
    public send(request: channelRouter_pb.FlowFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channelRouter_pb.FlowFileReply) => void): grpc.ClientUnaryCall;
}
