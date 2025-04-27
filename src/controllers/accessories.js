const {Accesorise}  = require("../models/productFull");

const getAccesCollection = async (req, res, next) => {
  try {
    const collection = await Accesorise.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

const getAccess = async (req, res, next) => {
    try {
        const {itemName} = req.params
        const phoneData = await Accesorise.find({id: itemName});
      res.status(200).json(phoneData);
    } catch (e) {
      res.status(204).json({ message: "No products" });
    }
  };

module.exports = {
    getAccesCollection,
    getAccess,
};
