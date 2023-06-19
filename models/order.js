const mongoose = require("mongoose");
const item = require("./item.js");

const order = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  date: { type: String },
  orderNumber: { type: String },
  items: [{ name: String, price: Number, quantity: Number }],
  notes: { type: String },
  payment: { type: String },
  status: { type: String },
  address: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("orders", order);
