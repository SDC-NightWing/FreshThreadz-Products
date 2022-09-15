const pool = require('../db/postgresDB.js');

module.exports.getProducts = (page, count) => {
  let start = page === 1 ? 1 : count + 1;
  let end = page * count;
  console.log('start and end range', start, end)
  let query = {
    text: 'SELECT id, name, slogan, description, category, default_price FROM products WHERE id BETWEEN $1 AND $2',
    values: [start, end]
  }
  return pool.query(query)
    .catch(err => console.log('failed to get products data (model) - ', err))
}

module.exports.getOneProduct = (id) => {
  let query = `SELECT row_to_json(t)
                FROM (
                  SELECT id, name, slogan, description, category, default_price,
                    (
                      SELECT array_to_json(array_agg(row_to_json(d)))
                      FROM (
                        SELECT feature, value
                        FROM features
                        WHERE product_id = $1
                      ) d
                    ) AS features
                  FROM products
                  WHERE id = $1
                ) t
                `;
  let arg = [id];
  return pool.query(query, arg)
      .catch(err => console.log('failed to get ONE product detail (model) - ', err))
}


module.exports.getRelated = (id) => {
  let query = {
    text: 'SELECT related_product_id FROM related WHERE current_product_id = $1',
    values: [id],
    rowMode: 'array'
  };
  return pool.query(query)
    .catch(err => console.log('failed to get related data (model) - ', err))
}