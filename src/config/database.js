require('dotenv').config();
const mysql = require('mysql2');

// code ở dưới dành cho 1 client
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_POST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
//code ở dưới dành cho đi làm

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_POST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //set up 3 tk dưới là sử dụng đc tk connect pool r
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;