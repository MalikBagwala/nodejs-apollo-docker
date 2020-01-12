FROM node:lts-alpine

# Working Directory APP
WORKDIR /usr/src/app

# Copy Both package.json and package-lock.json (regex) in the app dir
COPY package*.json ./

# Install the dependencies
RUN npm i

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]