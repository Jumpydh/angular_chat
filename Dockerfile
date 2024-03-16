FROM node:bookworm

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY ./app/package.json /app
RUN npm install

# Bundle app source
COPY ./app /app

EXPOSE 4200

ENV PATH /app/node_modules/.bin:$PATH

CMD ["ng", "serve", "--host", "0.0.0.0"]
