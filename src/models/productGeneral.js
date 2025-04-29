const mongoose = require("mongoose");

const productGeneralSchema = new mongoose.Schema({
    id: Number,
    category: String,
    itemId: String,
    name: String,
    fullPrice: Number,
    price: Number,
    screen: String,
    capacity: String,
    color: String,
    ram: String,
    year: Number,
    image: String,
  });


 const ProductGeneral = mongoose.model(
  "product",
  productGeneralSchema
);

module.exports ={ProductGeneral}