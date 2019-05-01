FROM node:8.11.4-alpine

WORKDIR /usr/src/app1

COPY package.json /usr/src/app1

EXPOSE 3000

RUN npm install

CMD [ "npm", "start" ]