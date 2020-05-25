FROM node:12-alpine
RUN npm install -g nodemon
RUN npm install express
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 5000
CMD ["npm", "start"]