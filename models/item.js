const mongoose = require("mongoose");

const item = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model("items", item);
