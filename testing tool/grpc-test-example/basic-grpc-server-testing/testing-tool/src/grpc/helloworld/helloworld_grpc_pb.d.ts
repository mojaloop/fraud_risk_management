// package: 
// file: helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as helloworld_pb from "./helloworld_pb";

interface ICustomerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ICustomerServiceService_IGetAll;
    get: ICustomerServiceService_IGet;
    insert: ICustomerServiceService_IInsert;
    update: ICustomerServiceService_IUpdate;
    remove: ICustomerServiceService_IRemove;
    getStatus: ICustomerServiceService_IgetStatus;
}

interface ICustomerServiceService_IGetAll extends grpc.MethodDefinition<helloworld_pb.Empty, helloworld_pb.CustomerList> {
    path: "/CustomerService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.Empty>;
    requestDeserialize: grpc.deserialize<helloworld_pb.Empty>;
    responseSerialize: grpc.serialize<helloworld_pb.CustomerList>;
    responseDeserialize: grpc.deserialize<helloworld_pb.CustomerList>;
}
interface ICustomerServiceService_IGet extends grpc.MethodDefinition<helloworld_pb.CustomerRequestId, helloworld_pb.Customer> {
    path: "/CustomerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.CustomerRequestId>;
    requestDeserialize: grpc.deserialize<helloworld_pb.CustomerRequestId>;
    responseSerialize: grpc.serialize<helloworld_pb.Customer>;
    responseDeserialize: grpc.deserialize<helloworld_pb.Customer>;
}
interface ICustomerServiceService_IInsert extends grpc.MethodDefinition<helloworld_pb.Customer, helloworld_pb.Customer> {
    path: "/CustomerService/Insert";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.Customer>;
    requestDeserialize: grpc.deserialize<helloworld_pb.Customer>;
    responseSerialize: grpc.serialize<helloworld_pb.Customer>;
    responseDeserialize: grpc.deserialize<helloworld_pb.Customer>;
}
interface ICustomerServiceService_IUpdate extends grpc.MethodDefinition<helloworld_pb.Customer, helloworld_pb.Customer> {
    path: "/CustomerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.Customer>;
    requestDeserialize: grpc.deserialize<helloworld_pb.Customer>;
    responseSerialize: grpc.serialize<helloworld_pb.Customer>;
    responseDeserialize: grpc.deserialize<helloworld_pb.Customer>;
}
interface ICustomerServiceService_IRemove extends grpc.MethodDefinition<helloworld_pb.CustomerRequestId, helloworld_pb.Empty> {
    path: "/CustomerService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.CustomerRequestId>;
    requestDeserialize: grpc.deserialize<helloworld_pb.CustomerRequestId>;
    responseSerialize: grpc.serialize<helloworld_pb.Empty>;
    responseDeserialize: grpc.deserialize<helloworld_pb.Empty>;
}
interface ICustomerServiceService_IgetStatus extends grpc.MethodDefinition<helloworld_pb.Empty, helloworld_pb.status> {
    path: "/CustomerService/getStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.Empty>;
    requestDeserialize: grpc.deserialize<helloworld_pb.Empty>;
    responseSerialize: grpc.serialize<helloworld_pb.status>;
    responseDeserialize: grpc.deserialize<helloworld_pb.status>;
}

export const CustomerServiceService: ICustomerServiceService;

export interface ICustomerServiceServer {
    getAll: grpc.handleUnaryCall<helloworld_pb.Empty, helloworld_pb.CustomerList>;
    get: grpc.handleUnaryCall<helloworld_pb.CustomerRequestId, helloworld_pb.Customer>;
    insert: grpc.handleUnaryCall<helloworld_pb.Customer, helloworld_pb.Customer>;
    update: grpc.handleUnaryCall<helloworld_pb.Customer, helloworld_pb.Customer>;
    remove: grpc.handleUnaryCall<helloworld_pb.CustomerRequestId, helloworld_pb.Empty>;
    getStatus: grpc.handleUnaryCall<helloworld_pb.Empty, helloworld_pb.status>;
}

export interface ICustomerServiceClient {
    getAll(request: helloworld_pb.Empty, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    getAll(request: helloworld_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    getAll(request: helloworld_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    get(request: helloworld_pb.CustomerRequestId, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    get(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    get(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    insert(request: helloworld_pb.Customer, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    insert(request: helloworld_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    insert(request: helloworld_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    update(request: helloworld_pb.Customer, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    update(request: helloworld_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    update(request: helloworld_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    remove(request: helloworld_pb.CustomerRequestId, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    remove(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    getStatus(request: helloworld_pb.Empty, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
    getStatus(request: helloworld_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
    getStatus(request: helloworld_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
}

export class CustomerServiceClient extends grpc.Client implements ICustomerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: helloworld_pb.Empty, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    public getAll(request: helloworld_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    public getAll(request: helloworld_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CustomerList) => void): grpc.ClientUnaryCall;
    public get(request: helloworld_pb.CustomerRequestId, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public get(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public get(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public insert(request: helloworld_pb.Customer, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public insert(request: helloworld_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public insert(request: helloworld_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public update(request: helloworld_pb.Customer, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public update(request: helloworld_pb.Customer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public update(request: helloworld_pb.Customer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Customer) => void): grpc.ClientUnaryCall;
    public remove(request: helloworld_pb.CustomerRequestId, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    public remove(request: helloworld_pb.CustomerRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.Empty) => void): grpc.ClientUnaryCall;
    public getStatus(request: helloworld_pb.Empty, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
    public getStatus(request: helloworld_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
    public getStatus(request: helloworld_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.status) => void): grpc.ClientUnaryCall;
}
