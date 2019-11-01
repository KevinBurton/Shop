const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = mongoose.model('Products').schema;
const userSchema = mongoose.model('Users').schema;

const productOrder = new Schema({
     product: { type: productSchema },
     quantity: { type: Number }
});
const orderSchema = new Schema({
      user: { type: userSchema },
      orderList: [{ type: productOrder }],
      date: { type: Date },
      totalCost: { type: Number },
      totalTax: { type: Number }
}, {
  timestamps: true
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;
