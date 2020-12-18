FROM node:12.16.1-alpine as builder

WORKDIR /opt/account-drain-processing-engine

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp

COPY package.json package-lock.json* /opt/account-drain-processing-engine/

RUN npm ci

RUN apk del build-dependencies

COPY tsconfig.json /opt/account-drain-processing-engine/
COPY src /opt/account-drain-processing-engine/src

RUN npm run build

CMD ["node", "build/index.js"]