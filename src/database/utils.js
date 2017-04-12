var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

function createTable(cb) {
    db.run('CREATE TABLE  IF NOT EXISTS resources (id INTEGER PRIMARY KEY,tech TEXT,url TEXT)', cb);
}

function add(data,cb) {
    data = JSON.parse(data);
    db.run(`INSERT INTO resources(tech,url) VALUES (?,?)`,[`${data.title}`,`${data.url}`],cb); // eslint-disable-line
}

function select(cb) {
    db.all('SELECT * FROM resources', cb);
}
function deleteRes(id, cb) {
    db.run(`DELETE FROM resources WHERE id=?`,[`${id}`],cb); //eslint-disable-line

}
function updateRes(id ,data, cb) {
    db.run(`UPDATE resources SET tech= ? ,url=? WHERE id=?`,[`${data.tech}`,`${data.url}`,`${id}`],cb); //eslint-disable-line

}

module.exports = {
    createTable,
    add,
    select,
    deleteRes,
    updateRes
};
