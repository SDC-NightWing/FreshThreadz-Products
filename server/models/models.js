const pool = require('../db/postgresDB.js');

module.exports.getRelated = (id) => {
  let query = {
    text: 'SELECT related_product_id from related WHERE current_product_id = $1',
    values: [id],
    rowMode: 'array'
  };
  return pool.query(query)
    .catch(err => console.log('failed to get related data (model) - ', err))
}