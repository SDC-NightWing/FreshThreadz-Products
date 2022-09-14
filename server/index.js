require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const db = require('./db.js')

app.use(express.json());
app.use(morgan('dev'));

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);