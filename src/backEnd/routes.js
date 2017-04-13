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
    handler: (request, reply) => {
        db.add(request.payload,(err)=>{
            if(err){
                return reply([{err:'err'}]);
            }
            db.select((err,res)=>{
                reply(res);
            });
        });
    }
},
{
    method: 'POST',
    path: '/update/{id}',
    handler: (request, reply) => {
        db.updateRes(request.params.id,request.payload, (err)=>{
            if (err) {
                reply([{error : 'error'}]);
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
    handler: (request, reply) => { 
        db.deleteRes(request.params.id,(err)=>{
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
