// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var isomessage_pb = require('./isomessage_pb.js');

function serialize_org_apache_isomessage_processors_grpc_FlowFileReply(arg) {
  if (!(arg instanceof isomessage_pb.FlowFileReply)) {
    throw new Error('Expected argument of type org.apache.isomessage.processors.grpc.FlowFileReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_isomessage_processors_grpc_FlowFileReply(buffer_arg) {
  return isomessage_pb.FlowFileReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_isomessage_processors_grpc_FlowFileRequest(arg) {
  if (!(arg instanceof isomessage_pb.FlowFileRequest)) {
    throw new Error('Expected argument of type org.apache.isomessage.processors.grpc.FlowFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_isomessage_processors_grpc_FlowFileRequest(buffer_arg) {
  return isomessage_pb.FlowFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The FlowFile service definition.
var FlowFileServiceService = exports.FlowFileServiceService = {
  // Sends a FlowFile (blocking rpc)
send: {
    path: '/org.apache.isomessage.processors.grpc.FlowFileService/Send',
    requestStream: false,
    responseStream: false,
    requestType: isomessage_pb.FlowFileRequest,
    responseType: isomessage_pb.FlowFileReply,
    requestSerialize: serialize_org_apache_isomessage_processors_grpc_FlowFileRequest,
    requestDeserialize: deserialize_org_apache_isomessage_processors_grpc_FlowFileRequest,
    responseSerialize: serialize_org_apache_isomessage_processors_grpc_FlowFileReply,
    responseDeserialize: deserialize_org_apache_isomessage_processors_grpc_FlowFileReply,
  },
};

exports.FlowFileServiceClient = grpc.makeGenericClientConstructor(FlowFileServiceService);
