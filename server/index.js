require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const products = require('./router.js')
const app = express();
const db = require('./db/mongoDB.js')

app.use(express.json());
app.use(morgan('dev'));

app.use('/products', products)

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);