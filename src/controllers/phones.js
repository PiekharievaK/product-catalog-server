const {Phone}  = require("../models/productFull");

const getPhonesCollection = async (req, res, next) => {
  try {
      console.log(Phone)
      const collection = await Phone.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

const getPhone = async (req, res, next) => {
    try {
        const {itemName} = req.params
        const phoneData = await Phone.find({id: itemName});
      res.status(200).json(phoneData);
    } catch (e) {
      res.status(204).json({ message: "No products" });
    }
  };

module.exports = {
    getPhonesCollection,
    getPhone,
};
