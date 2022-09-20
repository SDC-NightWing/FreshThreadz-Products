require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const products = require('./routers/router.js')
const app = express();
// const mongo = require('./db/mongoDB.js');
const psql = require('./db/postgresDB.js');

app.use(express.json());
app.use(morgan('dev'));

app.get('/loaderio-60dd52b0ab1a1dc903078d5f873be0f1/', (req, res) => res.send("loaderio-60dd52b0ab1a1dc903078d5f873be0f1"));

app.use('/products', products)

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);