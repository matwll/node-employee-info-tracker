const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    database: 'employee_db',
    password: process.env.DB_PW
});

module.exports = connection;