//import { ChannelCredentials } from '@grpc/grpc-js'; 
import { credentials } from 'grpc';
import { FlowFileServiceClient, FlowFileRequest, FlowFileReply } from './src/grpc/nifi';

describe('nifi health checker', () => {
    let client: FlowFileServiceClient;
    beforeEach(() => {
        // create grpc client to send data 
        client = new FlowFileServiceClient('127.0.0.1:50051', credentials.createInsecure());
    })
    it('should create the client', (done) => {
        expect(client).toBeDefined();
        done();
    })
    it('should check is nifi is online ', (done) => {
        const flowFileRequest: FlowFileRequest = new FlowFileRequest();
        client.send(flowFileRequest, (error, response) => {
            if (error !== null) {
                expect(error).toBeUndefined();
            }
            expect(response).toBeDefined();
            expect(response.getBody()).toBe('FlowFile successfully received.');
            expect(response.getResponsecode()).toBe(FlowFileReply.ResponseCode.SUCCESS);
            done();
        })
    })
})