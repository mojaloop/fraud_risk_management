FROM --platform=${TARGETPLATFORM:-linux/amd64} ghcr.io/openfaas/of-watchdog:0.8.4 as watchdog
FROM --platform=${TARGETPLATFORM:-linux/amd64} node:14-alpine as ship

ARG TARGETPLATFORM
ARG BUILDPLATFORM

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

RUN addgroup -S app && adduser -S -g app app

RUN apk --no-cache add curl ca-certificates

RUN apk add --no-cache -t build-dependencies git make gcc g++ python libtool autoconf automake yarn

# Turn down the verbosity to default level.
ENV NPM_CONFIG_LOGLEVEL warn

# chmod for tmp is for a buildkit issue
RUN chown app:app -R /home/app \
    && chmod 777 /tmp

USER app

# Create a folder named function
RUN mkdir -p /home/app

# Wrapper/boot-strapper
WORKDIR /home/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

# Install dependencies
# RUN yarn run cleanup

# Install dependencies
RUN yarn install

COPY ./src ./src

# Build the project
RUN yarn run build

# Environment variables for openfaas
ENV cgi_headers="true"
ENV fprocess="node ./build/index.js"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:3000"

ENV exec_timeout="10s"
ENV write_timeout="15s"
ENV read_timeout="15s"

ENV prefix_logs="false"

ENV NODE_ENV=development
ENV PORT=3000
ENV REDIS_CHANNEL_SCORING_DB=1
ENV REDIS_AUTH='TjEmUWes67'
ENV REDIS_HOST='my-redis-master'
ENV REDIS_PORT=6379
ENV CHANNEL_ROUTING_HOSTNAME=http://20.49.140.12:8080
ENV CHANNEL_ROUTING_PORT=3000
ENV CHANNEL_ROUTING_PATH=result-test

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

# Execute watchdog command
CMD ["fwatchdog"]