const db = require('../database/utils.js');
module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('index');

    }},
{
    method: 'GET',
    path: '/data',
    handler: (request, reply) => {
        db.select((err , res)=>{
            reply(res);
        });
    }
},
{
    method: 'POST',
    path: '/insert',
    handler: (request, reply) => { // eslint-disable-line

        db.add(request.payload,(err)=>{
            if(err){
                reply([{err:'err'}]);
            }

            db.select((err,res)=>{
                reply(res);
            });
        });
    }
},
{
    method: 'DELETE',
    path: '/delete/{id}',
    handler: (request, reply) => { // eslint-disable-line
        var id = encodeURIComponent(request.params.id);
        db.deleteRes(id,(err)=>{
            if(err){
                reply([{error : 'error'}]);
            }
            db.select((err,res)=>{
                reply(res);
            });
        });
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
