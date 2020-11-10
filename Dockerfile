FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install --production --silent 
COPY . .
CMD ["yarn", "start"]
EXPOSE 8080/tcp