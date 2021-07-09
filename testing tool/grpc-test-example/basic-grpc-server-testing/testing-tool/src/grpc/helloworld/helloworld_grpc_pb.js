// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var helloworld_pb = require('./helloworld_pb.js');

function serialize_Customer(arg) {
  if (!(arg instanceof helloworld_pb.Customer)) {
    throw new Error('Expected argument of type Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Customer(buffer_arg) {
  return helloworld_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomerList(arg) {
  if (!(arg instanceof helloworld_pb.CustomerList)) {
    throw new Error('Expected argument of type CustomerList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomerList(buffer_arg) {
  return helloworld_pb.CustomerList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CustomerRequestId(arg) {
  if (!(arg instanceof helloworld_pb.CustomerRequestId)) {
    throw new Error('Expected argument of type CustomerRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CustomerRequestId(buffer_arg) {
  return helloworld_pb.CustomerRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof helloworld_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return helloworld_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_status(arg) {
  if (!(arg instanceof helloworld_pb.status)) {
    throw new Error('Expected argument of type status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_status(buffer_arg) {
  return helloworld_pb.status.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerServiceService = exports.CustomerServiceService = {
  getAll: {
    path: '/CustomerService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.Empty,
    responseType: helloworld_pb.CustomerList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_CustomerList,
    responseDeserialize: deserialize_CustomerList,
  },
  get: {
    path: '/CustomerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.CustomerRequestId,
    responseType: helloworld_pb.Customer,
    requestSerialize: serialize_CustomerRequestId,
    requestDeserialize: deserialize_CustomerRequestId,
    responseSerialize: serialize_Customer,
    responseDeserialize: deserialize_Customer,
  },
  insert: {
    path: '/CustomerService/Insert',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.Customer,
    responseType: helloworld_pb.Customer,
    requestSerialize: serialize_Customer,
    requestDeserialize: deserialize_Customer,
    responseSerialize: serialize_Customer,
    responseDeserialize: deserialize_Customer,
  },
  update: {
    path: '/CustomerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.Customer,
    responseType: helloworld_pb.Customer,
    requestSerialize: serialize_Customer,
    requestDeserialize: deserialize_Customer,
    responseSerialize: serialize_Customer,
    responseDeserialize: deserialize_Customer,
  },
  remove: {
    path: '/CustomerService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.CustomerRequestId,
    responseType: helloworld_pb.Empty,
    requestSerialize: serialize_CustomerRequestId,
    requestDeserialize: deserialize_CustomerRequestId,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  getStatus: {
    path: '/CustomerService/getStatus',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.Empty,
    responseType: helloworld_pb.status,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_status,
    responseDeserialize: deserialize_status,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
