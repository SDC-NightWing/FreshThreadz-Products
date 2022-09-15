const express = require('express');
const controller = require('./controllers/controllers.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('product end point')
})

router.get('/:product_id', (req, res) => {
  res.send('product id end point')
})

router.get('/:product_id/styles', (req, res) => {
  res.send('style end point')
})

router.get('/:product_id/related', (req, res) => {
  res.send('related end point')
})



module.exports = router;

