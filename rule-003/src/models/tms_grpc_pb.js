// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tms_pb = require('./tms_pb.js');

function serialize_tmsservice_ExecuteRequest(arg) {
  if (!(arg instanceof tms_pb.ExecuteRequest)) {
    throw new Error('Expected argument of type tmsservice.ExecuteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tmsservice_ExecuteRequest(buffer_arg) {
  return tms_pb.ExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tmsservice_ExecuteResponse(arg) {
  if (!(arg instanceof tms_pb.ExecuteResponse)) {
    throw new Error('Expected argument of type tmsservice.ExecuteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tmsservice_ExecuteResponse(buffer_arg) {
  return tms_pb.ExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TMSService = exports.TMSService = {
  // Monitor transaction
//
// Mojaloop Transation
execute: {
    path: '/tmsservice.TMS/Execute',
    requestStream: false,
    responseStream: false,
    requestType: tms_pb.ExecuteRequest,
    responseType: tms_pb.ExecuteResponse,
    requestSerialize: serialize_tmsservice_ExecuteRequest,
    requestDeserialize: deserialize_tmsservice_ExecuteRequest,
    responseSerialize: serialize_tmsservice_ExecuteResponse,
    responseDeserialize: deserialize_tmsservice_ExecuteResponse,
  },
};

exports.TMSClient = grpc.makeGenericClientConstructor(TMSService);
