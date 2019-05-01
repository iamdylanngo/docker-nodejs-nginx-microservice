FROM node:8.11.4-alpine

WORKDIR /usr/src/app2

COPY package.json /usr/src/app2

EXPOSE 3001

RUN npm install

CMD [ "npm", "start" ]