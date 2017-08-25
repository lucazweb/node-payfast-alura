var mysql = require('mysql');

var createConnection = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'payfast'
  });
}

module.exports = function(){
  return createConnection;
}
