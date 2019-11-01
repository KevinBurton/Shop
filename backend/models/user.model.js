const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street1: { type: String, trim: true },
    street2: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zip: { type: String, trim: true }
});
const nameSchema = new Schema({
      first: { type: String, trim: true },
      middle: { type: String, trim: true },
      last: { type: String, trim: true },
});
const userSchema = new Schema({
      name: { type: nameSchema },
      address: { type: addressSchema },
      email: { type: String, trim: true },
      phone: { type: String, trim: true },
      isAdmin: { type: Boolean }
}, {
  timestamps: true
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
