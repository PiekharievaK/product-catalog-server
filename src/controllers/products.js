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

    const listByCategory = collection.filter(
      (item) => item.category === category
    );

    const sortList = (array) =>
      array.sort((a, b) => {
        const key = params.sortBy;

        if (!isNaN(+a[key])) {
          return +a[key] - +b[key];
        } else {
          return a[key].localeCompare(b[key]);
        }
      });

    const start = page > 1 ? params.count * +(page - 1) : 0;
    const finish = start + params.count;
    const sortedItemsOnPage = sortList(listByCategory).slice(start, finish);

    res
      .status(200)
      .json({ collection: sortedItemsOnPage, count: listByCategory.length });
  } catch (e) {
    res.status(204).json({ message: "No products" });
  }
};

module.exports = {
  getProductsCollection,
  getProductsPerPage,
};
