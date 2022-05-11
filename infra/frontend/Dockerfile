
FROM node:17-alpine
ENV HOME /work
ENV NODE_ENV="development"
ENV TZ=Asia/Tokyo

RUN apk update && \
    apk add --update --no-cache --virtual=.build-dependencies g++
RUN rm -rf /usr/local/bin/yarn
RUN rm -rf /usr/local/bin/yarnpkg
RUN npm install -g yarn

WORKDIR $HOME
