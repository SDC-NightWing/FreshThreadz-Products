const { Client, Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'products',
  password: process.env.PASSWORD,
  port: 5432
})

pool.connect();

pool.query('SELECT NOW()', (err, res) => {
  if (err) {console.log('psql db connection err')}
  else {console.log('psql db connected')}
})

module.exports = pool;