var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

function createTable(cb) {
    db.run('CREATE TABLE  IF NOT EXISTS resources (id INTEGER PRIMARY KEY,tech TEXT,url TEXT)', cb);
}

function add(data) {
    data = JSON.parse(data);
    db.run(`INSERT INTO resources(tech,url) VALUES ("${data.title}","${data.url}")`);
}

function select(cb) {
    db.all('SELECT * FROM resources', cb);
}

module.exports = {
    createTable,
    add,
    select
};
