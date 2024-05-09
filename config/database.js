// config/database.js

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'task_manager_db',
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
