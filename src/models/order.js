const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  order: [
    {
      id: String,
      count: Number,
    },
  ],
  owner: {
    id: String,
    email: String,
    name: String,
    phone: String,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = { Order };
