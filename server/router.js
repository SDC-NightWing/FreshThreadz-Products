const express = require('express');
const controller = require('./controllers/controllers.js');
const router = express.Router();

router.get('/', controller.getProducts);

router.get('/:product_id', controller.getOneProduct)

router.get('/:product_id/styles', controller.getStyles)

router.get('/:product_id/related', controller.getRelated);



module.exports = router;

