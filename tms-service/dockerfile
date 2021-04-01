FROM --platform=${TARGETPLATFORM:-linux/amd64} ghcr.io/openfaas/of-watchdog:0.8.4 as watchdog
FROM node:14.15.0-alpine as builder

ARG TARGETPLATFORM

WORKDIR /opt/tms-service

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

RUN apk --no-cache add curl ca-certificates \
    && addgroup -S app && adduser -S -g app app

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake yarn

COPY package.json yarn.lock /opt/tms-service/

RUN yarn install

RUN apk del build-dependencies

COPY tsconfig.json /opt/tms-service/
COPY src /opt/tms-service/src

RUN yarn run build

ENV cgi_headers="false"
ENV fprocess="node ./build/index.js"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:3000"

ENV exec_timeout="10s"
ENV write_timeout="15s"
ENV read_timeout="15s"

ENV prefix_logs="false"

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]