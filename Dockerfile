FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install --production --silent && yarn global add nodemon 
COPY . .
CMD ["yarn", "start"]
EXPOSE 8080/tcp