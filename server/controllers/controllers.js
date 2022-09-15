const model = require('../models/models.js');

module.exports.getProducts = (req, res) => {
  let start = 65631;
  let page = Number(req.query.page) || 1;
  let count = Number(req.query.count) || 5;
  model.getProducts(page, count, start)
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => {
      console.log('failed to get related data (controller) - ', err)
      res.sendStatus(404)
    });
}

module.exports.getOneProduct = (req, res) => {
  model.getOneProduct(req.params.product_id)
    .then((data) => {
      console.log(data);
      res.send(data.rows);
    })
    .catch((err) => console.log('failed to get ONE product info (controller)', err))
}


module.exports.getRelated = (req, res) => {
  model.getRelated(req.params.product_id)
    .then(data => {
      res.status(200).json(data.rows.flat().map(Number))
    })
    .catch((err) => {
      console.log('failed to get related data (controller) - ', err)
      res.sendStatus(404)
    });
}
