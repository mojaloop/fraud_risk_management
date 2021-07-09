FROM node:latest

RUN npm install npm -g
RUN npm install protoc-gen-ts grpc_tools_node_protoc_ts -g
WORKDIR /src
COPY ./package.json package.json
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "run", "update" ]