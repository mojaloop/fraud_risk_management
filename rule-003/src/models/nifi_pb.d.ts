// package: org.apache.nifi.processors.grpc
// file: nifi.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FlowFileRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): FlowFileRequest;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): FlowFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlowFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlowFileRequest): FlowFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlowFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlowFileRequest;
    static deserializeBinaryFromReader(message: FlowFileRequest, reader: jspb.BinaryReader): FlowFileRequest;
}

export namespace FlowFileRequest {
    export type AsObject = {
        id: number,

        attributesMap: Array<[string, string]>,
        content: Uint8Array | string,
    }
}

export class FlowFileReply extends jspb.Message { 
    getResponsecode(): FlowFileReply.ResponseCode;
    setResponsecode(value: FlowFileReply.ResponseCode): FlowFileReply;
    getBody(): string;
    setBody(value: string): FlowFileReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlowFileReply.AsObject;
    static toObject(includeInstance: boolean, msg: FlowFileReply): FlowFileReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlowFileReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlowFileReply;
    static deserializeBinaryFromReader(message: FlowFileReply, reader: jspb.BinaryReader): FlowFileReply;
}

export namespace FlowFileReply {
    export type AsObject = {
        responsecode: FlowFileReply.ResponseCode,
        body: string,
    }

    export enum ResponseCode {
    ERROR = 0,
    SUCCESS = 1,
    RETRY = 2,
    }

}
