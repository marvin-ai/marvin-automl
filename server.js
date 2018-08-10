'use strict';

// db
const Mongoose = require('mongoose');

// load database 
// 27017 mongodb default port
Mongoose.connect('mongodb://localhost:27017/marvindata', { useNewUrlParser: true });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('MarvinData Connection with database succeeded.');
});

// hapi
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

// routes
const routes = require('./routes');

// create new server instance
const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: true,
    files: {
      relativeTo: Path.join(__dirname, 'dist/marvin-automl-ui')
    }
  }
});

const provision = async () => {

  await server.register(Inert);

  // adding custom routes
  server.route(routes);

  await server.start();

  console.log('Marvin AutoML Server running at:', server.info.uri);
};

provision();