const mongoose = require("mongoose");

const productFullSchema = new mongoose.Schema({
  id: { type: String, required: true },
  namespaceId: String,
  name: String,
  capacityAvailable: [String],
  capacity: String,
  priceRegular: Number,
  priceDiscount: Number,
  colorsAvailable: [String],
  color: String,
  images: [String],
  description: [
    {
      title: String,
      text: [String],
    },
  ],
  screen: String,
  resolution: String,
  processor: String,
  ram: String,
  camera: String,
  zoom: String,
  cell: [String],
});

const Phone = mongoose.model("phone", productFullSchema);
const Tablet = mongoose.model("tablet", productFullSchema);
const Accesorise = mongoose.model("accessorie", productFullSchema);

module.exports = { Phone, Tablet, Accesorise };
