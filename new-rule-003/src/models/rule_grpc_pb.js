// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rule_pb = require('./rule_pb.js');

function serialize_ruleService_FlowFileReply(arg) {
  if (!(arg instanceof rule_pb.FlowFileReply)) {
    throw new Error('Expected argument of type ruleService.FlowFileReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ruleService_FlowFileReply(buffer_arg) {
  return rule_pb.FlowFileReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ruleService_FlowFileRequest(arg) {
  if (!(arg instanceof rule_pb.FlowFileRequest)) {
    throw new Error('Expected argument of type ruleService.FlowFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ruleService_FlowFileRequest(buffer_arg) {
  return rule_pb.FlowFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The FlowFile service definition.
var FlowFileServiceService = exports.FlowFileServiceService = {
  // Sends a FlowFile (blocking rpc)
send: {
    path: '/ruleService.FlowFileService/Send',
    requestStream: false,
    responseStream: false,
    requestType: rule_pb.FlowFileRequest,
    responseType: rule_pb.FlowFileReply,
    requestSerialize: serialize_ruleService_FlowFileRequest,
    requestDeserialize: deserialize_ruleService_FlowFileRequest,
    responseSerialize: serialize_ruleService_FlowFileReply,
    responseDeserialize: deserialize_ruleService_FlowFileReply,
  },
};

exports.FlowFileServiceClient = grpc.makeGenericClientConstructor(FlowFileServiceService);
