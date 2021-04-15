const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  brand: String,
  productName: String,
  details: String,
  price: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);