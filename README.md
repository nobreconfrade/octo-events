## Description

Octo events app, maintain github events from a directory. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# install packages
$ npm install

# install localtunnel to expose the backend route and run
# them add the received URL in github webhook page on repository settings
npm install -g localtunnel
lt --port 3000 --print-request

# run the database
$ docker-compose up

# development
$ npm run start

# or in watch mode
$ npm run start:dev
```

## Open API documentation

```bash
$ localhost:3000/api
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```