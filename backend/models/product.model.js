const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
  base: { type: Number },
  tax: { type: Number },
  duty: { type: Number }
});
const productSchema = new Schema({
      name: { type: String, trim: true },
      type: [{ type: String }],
      description: { type: String },
      price: { type: priceSchema },
      related: [{ type: String  }],
      image: { type: String, trim: true }
}, {
  timestamps: true
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
