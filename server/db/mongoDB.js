const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', () => {console.log('DB CONNECTION ERR')})
db.on('open', () => {console.log('DB IS OPEN')})

const productSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [{feature: String, value: String}],
  styles: [
    {
      style_id: Number,
      style_name: String,
      original_price: Number,
      sale_price: Number,
      default_style: Boolean,
      photos: [
        {
          thumbnail_url: String,
          url: String
        }
      ],
      skus: [
        {
          sku_id: Number,
          size: String,
          quantity: Number
        }
      ]
    }
  ],
  related: [{related_id: Number}]
});

const Products = mongoose.model('Products', productSchema);

module.exports.Products = Products;