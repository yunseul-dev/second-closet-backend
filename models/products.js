const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, default: uuidv4 },
  sellerId: { type: String, required: true },
  productName: { type: String, required: true },
  imgs: [{ type: String, required: true }],
  categories: [{ type: String, required: true }],
  count: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: Boolean, required: true },
  delivery: { type: Boolean, required: true },
  description: { type: String },
  tags: [{ type: String }],
  exchange: { type: Boolean, required: true },
  size: { type: String, required: true },
  facetoface: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
  hearts: [{ type: String }],
  sold: { type: Boolean, required: true },
});

module.exports = mongoose.model('Product', productSchema);
