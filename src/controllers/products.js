const { ProductGeneral } = require("../models/productGeneral");

const getProductsCollection = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});
    res.status(200).json(collection);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

const getProductsPerPage = async (req, res, next) => {
  try {
    const { page } = req.params;
    const { sort, perPage, category } = req.query;

    const collection = await ProductGeneral.find({});

    const params = {
      count: perPage ? +perPage : 8,
      sortBy: sort ? sort : "itemId",
    };

    const sortList = (array) =>
      array.filter(item => item.category === category).sort((a, b) => {
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
      .map((item) => item[params.sortBy]);

    res.status(200).json(sortedItemsOnPage);
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

module.exports = {
  getProductsCollection,
  getProductsPerPage,
};
