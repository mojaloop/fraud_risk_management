FROM node:12.16.1-alpine as builder

WORKDIR /opt/haversine-processing-engine

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp

COPY package.json package-lock.json* /opt/haversine-processing-engine/

RUN npm ci

RUN apk del build-dependencies

COPY tsconfig.json /opt/haversine-processing-engine/
COPY src /opt/haversine-processing-engine/src

FROM node:12.16.1-alpine

WORKDIR /opt/haversine-processing-engine

# Create a non-root user: ml-user
RUN adduser -D ml-user 
USER ml-user

COPY --chown=ml-user --from=builder /opt/haversine-processing-engine .
RUN npm run build

CMD ["node", "build/index.js"]