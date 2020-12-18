FROM node:12.16.1-alpine as builder

WORKDIR /opt/cash-withdraw-processing-engine

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp

COPY package.json package-lock.json* /opt/cash-withdraw-processing-engine/

RUN npm ci

RUN apk del build-dependencies

COPY tsconfig.json /opt/cash-withdraw-processing-engine/
COPY src /opt/cash-withdraw-processing-engine/src

RUN npm run build

CMD ["node", "build/index.js"]