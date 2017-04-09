module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('index');
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
