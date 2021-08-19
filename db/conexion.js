const mariadb =require('mariadb');

const config= {
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    connectionLimit:process.env.CONN_LIMIT,
};

const pool = mariadb.createPool(config);

module.exports=pool;