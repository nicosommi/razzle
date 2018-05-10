# buildtime
FROM node:8-alpine AS nodebase
LABEL maintainer="nicosommi@gmail.com"

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn
RUN yarn run build

EXPOSE 4000

ENTRYPOINT ["yarn", "run", "start:prod"]
