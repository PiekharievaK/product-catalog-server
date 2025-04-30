const { Phone } = require("../models/productFull");
const { ProductGeneral } = require("../models/productGeneral");

const getPhonesCollection = async (req, res, next) => {
  try {
    const collection = await Phone.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

const getPhone = async (req, res, next) => {
  try {
    const { itemName } = req.params;
    const phoneData = await Phone.findOne({ id: itemName });
    const itemInGeneral = await ProductGeneral.findOne({ itemId: itemName });
    res.status(200).json({ product: phoneData, productId: itemInGeneral.id });
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

module.exports = {
  getPhonesCollection,
  getPhone,
};
