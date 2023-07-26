FROM node:current-slim

WORKDIR /web

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD yarn start

