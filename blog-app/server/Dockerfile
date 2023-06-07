FROM node:16-alpine

ENV NODE_ENV=development

COPY . /server

WORKDIR /server

RUN npm install

EXPOSE 8081

CMD [ "node", "server.js" ]
