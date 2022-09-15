const model = require('../models/models.js');

module.exports.getRelated = (req, res) => {
  model.getRelated(req.url.split('/')[1])
    .then(data => {
      res.status(200).json(data.rows.flat().map(Number))
    })
    .catch((err) => {
      console.log('failed to get related data (controller) - ', err)
      res.sendStatus(404)
    });
}
