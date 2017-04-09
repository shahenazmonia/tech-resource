module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('index');
    }
},
{
    method: 'GET',
    path: '/data',
    handler: (request, reply) => {
        reply([{asd:'asd',abc:'abc'},{bb:'bb',bbb:'bbb'}]);
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
