[15:32] Jonty Esterhuizen

# TMS-Service

The TMS service is a NodeJs REST-API service that ingests a FRM transaction and validates if it has the correct format.

## Installation

```sh
yarn
```

## Build

```sh
yarn build # *.ts Also, triggers prebuild script
```

1. Build proto files into typescript
2. Build the project

## Server Start

```sh
yarn start # Builds and start the server
```

## Client Health Test

```sh
curl --location --request GET 'localhost:3000/'
```

```json
// Response
{​​​​​​​​ "service": "Service-Name", "status": "UP" }​​​​​​​​
```

### gRPC Client Function

We can create proto request with the grpc client functions.

1. Create proto request with client function
2. Triggers grpc server function
3. Do the job and response

```javascript
classTMSService {​​​​​​​​
privatereadonlyclient: TMSClient = newTMSClient(`localhost:${​​​​​​​​config.grpcport}​​​​​​​​`, credentials.createInsecure());

publicasyncexecute(param: ExecuteRequest, metadata: Metadata = newMetadata()): Promise<ExecuteResponse> {​​​​​​​​
returnnewPromise((resolve: Resolve<ExecuteResponse>, reject: Reject): void=> {​​​​​​​​
this.client.execute(param, metadata, (err: ServiceError | null, res: ExecuteResponse) => {​​​​​​​​
if (err) {​​​​​​​​
returnreject(err);
        }​​​​​​​​

resolve(res);
      }​​​​​​​​);
    }​​​​​​​​);
  }​​​​​​​​
}​​​​​​​​
```

### gRPC Server Function

```javascript
publicasyncexecute(call: ServerUnaryCall<ExecuteRequest, ExecuteResponse>, callback: sendUnaryData<ExecuteResponse>): Promise<void> {​​​​​​​​
    try {​​​​​​​​
      const body = call.request.getBody();

      const res:ExecuteResponse = newExecuteResponse();

res.setData(res.getData());

callback(null, res);
    }​​​​​​​​ catch (e) {​​​​​​​​
logger.error(e);
    }​​​​​​​​
  }​​​​​​​​
```

### References

-[Node.js gRPC](https://grpc.io/grpc/node/grpc.html) 

-[Protocol Buffers](https://developers.google.com/protocol-buffers/docs/proto3) 

-[TypeScript d.ts plugin for gRPC Tools](https://github.com/agreatfool/grpc_tools_node_protoc_ts)
