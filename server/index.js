require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const products = require('./routers/router.js')
const app = express();
// const mongo = require('./db/mongoDB.js');
const psql = require('./db/postgresDB.js');

app.use(express.json());
app.use(morgan('dev'));

app.get('/loaderio-daadd206ffb8d48319ab4cd1c68574a3/', (req, res) => res.send("loaderio-daadd206ffb8d48319ab4cd1c68574a3"));

app.get('/loaderio-60dd52b0ab1a1dc903078d5f873be0f1/', (req, res) => res.send("loaderio-60dd52b0ab1a1dc903078d5f873be0f1"));

app.get('/loaderio-9e620486d1d4c95489a43916177cc3a0/', (req, res) => res.send("loaderio-9e620486d1d4c95489a43916177cc3a0"));

app.get('/loaderio-af06f2cf8e752b9ca4ab8712b39a1e88/'), (req, res) => res.send("loaderio-af06f2cf8e752b9ca4ab8712b39a1e88");

app.use('/products', products)

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);