FROM --platform=${TARGETPLATFORM:-linux/amd64} node:14-alpine as ship

ARG TARGETPLATFORM
ARG BUILDPLATFORM

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

# Install dependencies
RUN yarn

COPY ./dist ./dist

EXPOSE 50051

CMD ["node", "./dist/src/server.js"]
