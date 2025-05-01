const { Tablet } = require("../models/productFull");
const { ProductGeneral } = require("../models/productGeneral");

const getTabletsCollection = async (req, res, next) => {
  try {
    const collection = await Tablet.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const getTablet = async (req, res, next) => {
  try {
    const { itemName } = req.params;
    const tabletData = await Tablet.findOne({ id: itemName });
    const itemInGeneral = await ProductGeneral.findOne({ itemId: itemName });
    res.status(200).json({ product: tabletData, productId: itemInGeneral.id });
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

module.exports = {
  getTabletsCollection,
  getTablet,
};
