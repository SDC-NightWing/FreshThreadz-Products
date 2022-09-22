require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const products = require('./routers/router.js')
const app = express();
// const mongo = require('./db/mongoDB.js');
const psql = require('./db/postgresDB.js');

app.use(express.json());
app.use(morgan('dev'));

app.get(`/${process.env.LOADERIO}/`, (req, res) => res.send(process.env.LOADERIO));

app.use('/products', products);

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);