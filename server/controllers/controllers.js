const model = require('../models/models.js');

module.exports.getProducts = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let count = Number(req.query.count) || 5;

  await model.getProducts(page, count)
    .then((data) => {
      res.status(200).json(data.rows)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(404)
    });
}

module.exports.getOneProduct = (req, res) => {
  model.getOneProduct(req.params.product_id)
    .then((data) => {
      res.status(200).json(data.rows[0].row_to_json);
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(404)
    })
}

module.exports.getRelated = (req, res) => {
  model.getRelated(req.params.product_id)
    .then(data => {
      res.status(200).json(data.rows.flat().map(Number))
    })
    .catch((err) => {
      res.sendStatus(404)
    });
}


module.exports.getStyles = (req, res) => {
  model.getStyles(req.params.product_id)
    .then((data) => {
      // let parsed = data.rows.map((style) => {
      //   style.results.forEach((result) => {
      //     result['default?'] = result['default?'] ? true : false;
      //   })
      //   return style;
      // });
      res.status(200).json(data.rows)
    })
    .catch(err => {
      res.sendStatus(404);
    })
}