FROM node:14.18.1-alpine3.11

ARG NODE_ENV="development"

RUN mkdir client

WORKDIR /client

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start
