# Tech Resources

This project is a small web application for add,remove and update Tech resources (resource title, resource URL)

We used **React**,**reduix** and **asynch reduix front-end** with **hapi server**, also we used **sqlite3 database** (Add,delete,update)

**This is the add-on a new resource process**

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/17858111_805964889558674_360940926_n.png?oh=364bc1d797369d87c3f7c57940a4a5ab&oe=58F1FF50)

**Install and connect with database:**
```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('YOUR_DATABASE_NAME');

```

**To run this code**
```
$ git clone https://github.com/shahenazmonia/tech-resource.git
$ npm i
$ npm i nodemon -g
$ npm run watch
$ npm run server:watch

Visit http://localhost:(whatever the port is)
```
