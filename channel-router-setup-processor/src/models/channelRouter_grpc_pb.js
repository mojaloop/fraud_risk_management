// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var channelRouter_pb = require('./channelRouter_pb.js');

function serialize_channelRouterService_FlowFileReply(arg) {
  if (!(arg instanceof channelRouter_pb.FlowFileReply)) {
    throw new Error('Expected argument of type channelRouterService.FlowFileReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channelRouterService_FlowFileReply(buffer_arg) {
  return channelRouter_pb.FlowFileReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_channelRouterService_FlowFileRequest(arg) {
  if (!(arg instanceof channelRouter_pb.FlowFileRequest)) {
    throw new Error('Expected argument of type channelRouterService.FlowFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channelRouterService_FlowFileRequest(buffer_arg) {
  return channelRouter_pb.FlowFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The FlowFile service definition.
var FlowFileServiceService = exports.FlowFileServiceService = {
  // Sends a FlowFile (blocking rpc)
send: {
    path: '/channelRouterService.FlowFileService/Send',
    requestStream: false,
    responseStream: false,
    requestType: channelRouter_pb.FlowFileRequest,
    responseType: channelRouter_pb.FlowFileReply,
    requestSerialize: serialize_channelRouterService_FlowFileRequest,
    requestDeserialize: deserialize_channelRouterService_FlowFileRequest,
    responseSerialize: serialize_channelRouterService_FlowFileReply,
    responseDeserialize: deserialize_channelRouterService_FlowFileReply,
  },
};

exports.FlowFileServiceClient = grpc.makeGenericClientConstructor(FlowFileServiceService);
