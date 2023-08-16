import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    port: 3031,
    user: 'root',
    password: 'Sqldoawk1!',
    database:'northwind',
};

const pool = mysql.createPool(dbConfig);

export default pool;
