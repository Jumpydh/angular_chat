FROM node:bookworm

# Create app directory
RUN mkdir /project
WORKDIR /project

# Install app dependencies
COPY ./app/package.json /project
RUN npm install

# Bundle app source
COPY ./app /project

EXPOSE 4200

ENV PATH /project/node_modules/.bin:$PATH

CMD ["ng", "serve", "--host", "0.0.0.0"]
