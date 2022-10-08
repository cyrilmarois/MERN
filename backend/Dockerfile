# Build node server
FROM node:16.17-alpine as development

# Create app directory
WORKDIR /usr/src/app

# Copy package and package-lock
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usrc/src/app/package-lock.json

# Installing dependencies
RUN npm install

## Copy local dependency files to app
COPY . /usr/src/app

EXPOSE 666

USER node

CMD ["npm", "run", "dev"]