const Hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const handlebars = require('handlebars');
const routes = require('./routes.js');
const db = require('../database/utils.js');
const server = new Hapi.Server();
server.connection({
    port: 3000
});
db.createTable((err, res)=>{ // eslint-disable-line
    if (err) {
        throw err;
    }
});

server.register([vision, inert], (err) => {
    if (err) {
        throw err;
    }

});
server.route(routes);
server.views({
    engines: {
        html: handlebars
    },
    path: 'public',
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running : ${server.info.uri}`);// eslint-disable-line
});
