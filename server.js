'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

// create new server instance
const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'dist/marvin-ui')
        }
    }
});

const provision = async () => {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });

    await server.start();

    console.log('Marvin AutoML Server running at:', server.info.uri);
};

provision();