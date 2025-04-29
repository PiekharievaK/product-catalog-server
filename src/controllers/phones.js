const {Phone}  = require("../models/productFull");
const {ProductGeneral} = require("../models/productGeneral")

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
        const {itemName} = req.params
        const phoneData = await Phone.findOne({id: itemName});
        const itemInGeneral = await ProductGeneral.findOne({itemId: itemName})
      res.status(200).json({product: phoneData, productId: itemInGeneral.id });
    } catch (e) {
      res.status(204).json({ message: "No products" });
    }
  };

  const getPhonesPerPage = async (req, res, next) => {
    try {
      const { page } = req.params;
      const { sort, perPage } = req.query;
  
      const collection = await Phone.find({});
  
      const params = {
        count: perPage ? +perPage : 8,
        sortBy: sort ? sort : "namespaceId",
      };
  
      const sortList = (array) =>
        array.sort((a, b) => {
          const key = params.sortBy;
  
          if (!isNaN(+a[key])) {
            return +a[key] - +b[key];
          } else {
            return a[key].localeCompare(b[key]);
          }
        });
  
      const start = params.count * +page;
      const finish = start + params.count;
      const sortedItemsOnPage = sortList(collection)
        .slice(start, finish)
        .map((item) => item[params.sortBy]).length;
  
      res.status(200).json(sortedItemsOnPage);
    } catch (e) {
      res.status(204).json({ message: "No products" });
    }
  };

module.exports = {
    getPhonesCollection,
    getPhone,
    getPhonesPerPage,
};
