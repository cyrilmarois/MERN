# Build node server
FROM node:16.17-alpine as development

# Create app directory
WORKDIR /usr/src/app

# Copy package and package-lock
COPY package*.json ./

# Installing dependencies
RUN npm install

## Copy local dependency files to app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]