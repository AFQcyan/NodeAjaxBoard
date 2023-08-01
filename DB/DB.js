const mysql = require('mysql2');
const option = require('./credential');

const pool = mysql.createPool(option);
const promisePool = pool.promise()

module.exports = promisePool;