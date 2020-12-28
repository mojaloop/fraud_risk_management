FROM node:12.16.1-alpine as builder

WORKDIR /opt/typology-register

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp

COPY package.json package-lock.json* /opt/typology-register/

RUN npm ci

RUN apk del build-dependencies

COPY tsconfig.json /opt/typology-register/
COPY src /opt/typology-register/src

RUN npm run build

CMD ["node", "build/index.js"]