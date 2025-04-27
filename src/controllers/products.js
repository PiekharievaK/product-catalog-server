const {ProductGeneral}  = require("../models/productGeneral");

const getProductsCollection = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

module.exports = {
  getProductsCollection,
};
