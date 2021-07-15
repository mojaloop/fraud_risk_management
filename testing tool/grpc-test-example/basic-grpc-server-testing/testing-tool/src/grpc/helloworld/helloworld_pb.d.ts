// package: 
// file: helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class status extends jspb.Message { 
    getServicestatus(): string;
    setServicestatus(value: string): status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): status.AsObject;
    static toObject(includeInstance: boolean, msg: status): status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): status;
    static deserializeBinaryFromReader(message: status, reader: jspb.BinaryReader): status;
}

export namespace status {
    export type AsObject = {
        servicestatus: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getName(): string;
    setName(value: string): Customer;
    getAge(): number;
    setAge(value: number): Customer;
    getAddress(): string;
    setAddress(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
        name: string,
        age: number,
        address: string,
    }
}

export class CustomerList extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<Customer>;
    setCustomersList(value: Array<Customer>): CustomerList;
    addCustomers(value?: Customer, index?: number): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerList.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerList): CustomerList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerList;
    static deserializeBinaryFromReader(message: CustomerList, reader: jspb.BinaryReader): CustomerList;
}

export namespace CustomerList {
    export type AsObject = {
        customersList: Array<Customer.AsObject>,
    }
}

export class CustomerRequestId extends jspb.Message { 
    getId(): string;
    setId(value: string): CustomerRequestId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerRequestId.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerRequestId): CustomerRequestId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerRequestId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerRequestId;
    static deserializeBinaryFromReader(message: CustomerRequestId, reader: jspb.BinaryReader): CustomerRequestId;
}

export namespace CustomerRequestId {
    export type AsObject = {
        id: string,
    }
}
