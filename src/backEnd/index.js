'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const vision = require('vision')
const handlebars = require('handlebars');
const routes = require('./routes.js')
var env = require('env')
const server = new Hapi.Server()
server.connection({
  port: 3000
})
server.register([vision, inert], (err) => {
  if (err) {
    throw err
  }

})
server.route(routes);
server.views({
        engines: {
            html: handlebars
        },
        path: 'public',
});
server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running : ${server.info.uri}`)
})
