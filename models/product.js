const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
},{ timestamps: true});

const productSchema = new Schema({
  brand: String,
  productName: String,
  details: String,
  price: Number,
  reviews: [reviewSchema],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);