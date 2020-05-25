FROM node:12-alpine
RUN mkdir -p /usr/src/app
RUN npm install -g nodemon
RUN npm install express
RUN npm install swagger-jsdoc
RUN npm install swagger-ui-express
RUN npm install qr-image
RUN npm install mongoose
RUN npm install nyc
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 5000
CMD ["npm", "start"]