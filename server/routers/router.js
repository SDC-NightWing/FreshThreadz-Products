const express = require('express');
const controller = require('../controllers/controllers.js');
const router = express.Router();

router.get('/', controller.getProducts);

router.get('/:product_id', controller.getOneProduct)

router.get('/:product_id/styles', controller.getStyles)

router.get('/:product_id/related', controller.getRelated);

router.get('/loaderio-60dd52b0ab1a1dc903078d5f873be0f1', (req, res) => res.send("loaderio-60dd52b0ab1a1dc903078d5f873be0f1"));

module.exports = router;

