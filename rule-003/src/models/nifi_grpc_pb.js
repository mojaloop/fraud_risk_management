// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nifi_pb = require('./nifi_pb.js');

function serialize_org_apache_nifi_processors_grpc_FlowFileReply(arg) {
  if (!(arg instanceof nifi_pb.FlowFileReply)) {
    throw new Error('Expected argument of type org.apache.nifi.processors.grpc.FlowFileReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_nifi_processors_grpc_FlowFileReply(buffer_arg) {
  return nifi_pb.FlowFileReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_apache_nifi_processors_grpc_FlowFileRequest(arg) {
  if (!(arg instanceof nifi_pb.FlowFileRequest)) {
    throw new Error('Expected argument of type org.apache.nifi.processors.grpc.FlowFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_apache_nifi_processors_grpc_FlowFileRequest(buffer_arg) {
  return nifi_pb.FlowFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The FlowFile service definition.
var FlowFileServiceService = exports.FlowFileServiceService = {
  // Sends a FlowFile (blocking rpc)
send: {
    path: '/org.apache.nifi.processors.grpc.FlowFileService/Send',
    requestStream: false,
    responseStream: false,
    requestType: nifi_pb.FlowFileRequest,
    responseType: nifi_pb.FlowFileReply,
    requestSerialize: serialize_org_apache_nifi_processors_grpc_FlowFileRequest,
    requestDeserialize: deserialize_org_apache_nifi_processors_grpc_FlowFileRequest,
    responseSerialize: serialize_org_apache_nifi_processors_grpc_FlowFileReply,
    responseDeserialize: deserialize_org_apache_nifi_processors_grpc_FlowFileReply,
  },
};

exports.FlowFileServiceClient = grpc.makeGenericClientConstructor(FlowFileServiceService);
