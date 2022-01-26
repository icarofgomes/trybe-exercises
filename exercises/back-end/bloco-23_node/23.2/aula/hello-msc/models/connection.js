const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: 'jdw4zqn9',
    database: process.env.MYSQL_DB_NAME
});

module.exports = connection;
