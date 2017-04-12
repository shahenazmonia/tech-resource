# Tech Resources 

## The project is a small website for add,remove and update resources (resource title, resource url)

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/17858111_805964889558674_360940926_n.png?oh=c6f7b53c9fedd80ebe4a2e4e2d27b22a&oe=58ECB950)

### We used React,reduix and asynch reduix front-end with hapi server, also we used sqlite3 database (Add,delete,update)

### Install and connect with database by:

```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

```

<!-- ** when the user add a resource name and URl and press on add button will validate if the inputs empty or full if empty the button color will still red if the inputs full the button color will be green and the user can add the resources to the table ** -->


