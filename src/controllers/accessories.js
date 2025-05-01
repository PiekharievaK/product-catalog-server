const { Accesorise } = require("../models/productFull");
const { ProductGeneral } = require("../models/productGeneral");

const getAccesCollection = async (req, res, next) => {
  try {
    const collection = await Accesorise.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const getAccess = async (req, res, next) => {
  try {
    const { itemName } = req.params;
    const AccesData = await Accesorise.findOne({ id: itemName });
    const itemInGeneral = await ProductGeneral.findOne({ itemId: itemName });
    res.status(200).json({ product: AccesData, productId: itemInGeneral.id });
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

module.exports = {
  getAccesCollection,
  getAccess,
};
