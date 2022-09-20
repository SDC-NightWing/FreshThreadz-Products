require('dotenv').config();
const { Client, Pool } = require('pg');

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PASSWORD,
  port: process.env.PGPORT,
  // user: 'ubuntu',
  // host: 'ec2-54-219-130-189.us-west-1.compute.amazonaws.com',
  // database: 'products',
  // password: 'password',
  // port: 5432,
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
  if (err) {console.log('psql db connection err', err)}
  else {console.log('psql db connected')}
})

module.exports = client;