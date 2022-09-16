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
      res.send(data.rows[0].row_to_json);
    })
    .catch((err) => console.log('failed to get ONE product info (controller) - ', err))
}

module.exports.getStyles = (req, res) => {
  model.getStyles(req.params.product_id)
    .then((data) => {
      let parsed = data.rows[0].array_to_json.map((style) => {
        style.style_id = style.id;
        style['default?'] = style.default_style ? true : false;
        style.skus = {};
        style.array_to_json.forEach((sku) => {
          style.skus[sku.id] = {quantity: sku.quantity, size: sku.size}
        })
        delete style.default_style;
        delete style.id;
        delete style.array_to_json;
        return style;
      });

      let finalParsed = {
        product_id : req.params.product_id,
        results: parsed
      };

      res.status(200).json(finalParsed);
    })
    .catch(err => {
      console.log('failed to get product style (controller) - ', err);
      res.sendStatus(404);
    })
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
