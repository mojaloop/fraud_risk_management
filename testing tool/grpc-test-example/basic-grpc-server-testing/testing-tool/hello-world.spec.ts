import { credentials } from 'grpc';
import { CustomerServiceClient, CustomerRequestId, Empty } from './src/grpc/helloworld';
import chalk from "chalk";
describe('hello world client checks via grpc', () => {
    let client: CustomerServiceClient;
    it('should check that jest is running', (done) => {
        expect(1).toEqual(1);
        done();
    });
    beforeEach(() => {
        // create grpc client to send data 
        client = new
            CustomerServiceClient('127.0.0.1:30043', credentials.createInsecure());

    })
    it('should create the client', (done) => {
        console.log(chalk.green('client connecting to =>'),
            chalk.blueBright(client.getChannel().getTarget()
            ));
        expect(client).toBeDefined();
        done();
    })
    it('should test client status ', (done) => {
        client.getStatus(new Empty(), (callback, response) => {
            expect(callback).toBeNull();
            expect(response).toBeDefined()
            done();
        });
    })
    it('this should get client one info', (done) => {
        const requestId = new CustomerRequestId();
        requestId.setId('a68b823c-7ca6-44bc-b721-fb4d5312cafc');
        // send request to client 
        client.get(requestId, (callback, response) => {
            expect(callback).toBeNull();
            expect(response.getName()).toEqual('John Bolton');
            done();
        });
    })
    it('should bring back all customers and test one customer details', (done) => {
        client.getAll(new Empty(), (callback, responce) => {
            expect(callback).toBeNull();
            expect(responce).toBeDefined();
            const responceArray = { ...responce.toObject().customersList };
            expect(responceArray.length > 0)
            const customerSelected = responceArray[1];
            expect(customerSelected.name).toEqual('Mary Annes');
            done();
        });

    })

})