const db = require('../database/migrate.js');
// console.log(db);
module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('index');
    }
},
{
    method: 'POST',
    path: '/insert',
    handler: (request, reply) => { // eslint-disable-line
        db.add(request.payload);

    }
},
{
    method: 'GET',
    path: '/public/{file*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
}
];
