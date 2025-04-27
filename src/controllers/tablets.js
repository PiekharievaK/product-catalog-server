const {Tablet}  = require("../models/productFull");

const getTabletsCollection = async (req, res, next) => {
  try {
    const collection = await Tablet.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

const getTablet = async (req, res, next) => {
    try {
        const {itemName} = req.params
        const phoneData = await Tablet.find({id: itemName});
      res.status(200).json(phoneData);
    } catch (e) {
      res.status(204).json({ message: "No products" });
    }
  };

module.exports = {
    getTabletsCollection,
    getTablet,
};
