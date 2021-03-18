FROM --platform=${TARGETPLATFORM:-linux/amd64} ghcr.io/openfaas/of-watchdog:0.8.4 as watchdog
FROM node:12.16.1-alpine as builder
ARG TARGETPLATFORM
WORKDIR /opt/rule-86-arangodb
ENV NPM_CONFIG_LOGLEVEL warn
COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog
RUN apk --no-cache add curl ca-certificates \
    && addgroup -S app && adduser -S -g app app
RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp
COPY package.json package-lock.json* /opt/rule-86-arangodb/
RUN npm ci
RUN apk del build-dependencies
COPY tsconfig.json /opt/rule-86-arangodb/
COPY src /opt/rule-86-arangodb/src
COPY .env /opt/rule-86-arangodb/
RUN npm run build
ENV cgi_headers="true"
ENV fprocess="node ./build/index.js"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:9006"
ENV exec_timeout="10s"
ENV write_timeout="15s"
ENV read_timeout="15s"
ENV prefix_logs="false"
HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1
CMD ["fwatchdog"]