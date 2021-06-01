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

ENV FUNCTION_NAME=transaction-aggregation-decisioning-processor
ENV PORT=3000
ENV REDIS_DB=0
ENV REDIS_AUTH=TjEmUWes67
ENV REDIS_HOST=20.49.232.215
ENV REDIS_PORT=6379
ENV REDIS_CONNECTION=true
ENV APM_SERVICE_NAME=transaction-aggregation-decisioning-processor
ENV APM_URL=http://51.11.6.161:8200
ENV APM_SECRET_TOKEN=eyJhbGciOiJSUzI1NiIsImtpZCI6InRDZTJLUVotZU9ZdXN3cldINktjLTkzVXBNaU1SWHJ1Nm5OR1dNRGM3ck0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJmcm0iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoiYXBtLXNlcnZlci1hcG0tc2VydmVyLXRva2VuLXpkaHNzIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFwbS1zZXJ2ZXItYXBtLXNlcnZlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjI3NzhjY2Q3LTMwMjEtNDdhMy04YTU1LTdiYmJhMGQ1ZjQ3ZCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpmcm06YXBtLXNlcnZlci1hcG0tc2VydmVyIn0.UWqRaNxzBCqHPnzQGiHd2BPk3Gsi81C7_Al3HdYWnfxFmqh3ng1SaAXKm0pNH8OUESiUHI9p0dftJr3A5AgtKALMMIl2OK4oFYVeIgfKYiZ5WYCeiaawLFg6sRph0uYZsfTvhDNmy2NaEElLpIsT7_8XXzc12NCZvIJ6sKL5Ue1GBClSu1avEGKHzq1TNzP2drxsBU-BLJGaXOrTHvJp4w1J-NXKlf0Xluq3eMF-8TLj3Hx06i7pcHi5yGPFGSCf_qu1jPjh-ValPJUfDb9UIQZVepbhuzvI10VXt0JXlUw-nc7yb66SqKvwAp4_W92dYjrP3PeExpfkrGP4-0yzaAzTDocCUKHejO-inI5H16N0SNaGrGTktGj9HK6F_PXGMRqvHCzJKhi6rUpkf_WtcjvKEBlVvLCdsTcgfQOA_JyK-H0-E0yFIhQgN7t0ZaQG_mtduxniG4hIZszwuJzUdEftccOXlBwEdsLncmqxOCZe9epSQ8zqCMR-B4O1W3eBMs8yCzvNz9Zf2GK-gCdJ-ZvUU8JSM6GLnlBj5zBExtBnsc525W6SbxPOTMQsiAjymhLNOgvphfOIiwVHDK1F2QYuSOWDAa9nX8XOBRoc3uqmPnPx8FE3WW5nzzQff_MrAALxDCnMIUgjWpurT-4puH1u1No-jfQzdgb9JPkQiz0
ENV NODE_ENV=production
ENV TRANSACTION_ROUTING_HOST=localhost
ENV TRANSACTION_ROUTING_PORT=3000
ENV TRANSACTION_ROUTING_PATH=result-test

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

# Execute watchdog command
CMD ["fwatchdog"]
