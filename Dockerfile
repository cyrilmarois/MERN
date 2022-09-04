# Dockerfile for Node

# Build node server
FROM node:16.17-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package and package-lock
COPY package*.json ./

# Installing dependencies
RUN npm install

## Copy local dependency files to app
COPY . .

EXPOSE 666

CMD ["npm", "start"]