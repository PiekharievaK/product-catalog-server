const { ProductGeneral } = require("../models/productGeneral");
const baseCountofItems = 10;

const generateRandomIdx = (itemsLength, count) => {
  const indexes = new Set();

  while (indexes.size < count) {
    const randomIndex = Math.floor(Math.random() * itemsLength);
    indexes.add(randomIndex);
  }

  return Array.from(indexes);
};

const getProductsCollection = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});
    res.status(200).json({ collection: collection, count: collection.length });
  } catch (e) {
    res.status(400).json({ message: "No products" });
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
    res.status(400).json({ message: "No products" });
  }
};

const getTopNew = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});
    const newestList = collection
      .sort((a, b) => b.year - a.year)
      .slice(0, baseCountofItems);

    res.status(200).json(newestList);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const getHotPrice = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});

    const hotPriceCollection = collection
      .sort((a, b) => {
        const firstDiference = a.fullPrice - a.price;
        const secondDiference = b.fullPrice - b.price;
        return firstDiference - secondDiference;
      })
      .slice(0, baseCountofItems);

    res.status(200).json(hotPriceCollection);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const getRandom = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});

    const randomIdxArr = generateRandomIdx(collection.length, baseCountofItems);
    const randomCollection = collection.filter((_, idx) =>
      randomIdxArr.includes(idx)
    );

    res.status(200).json(randomCollection);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const getHero = async (req, res, next) => {
  try {
    const collection = await ProductGeneral.find({});
    const phones = collection.filter((item) => item.category === "phones");
    const tablets = collection.filter((item) => item.category === "tablets");
    const accessorise = collection.filter(
      (item) => item.category === "accessories"
    );

    const randomCollection = [
      {
        category: "phones",
        length: phones.length,
        random: phones[generateRandomIdx(phones.length, 1)],
      },
      {
        category: "tablets",
        length: tablets.length,
        random: tablets[generateRandomIdx(tablets.length, 1)],
      },
      {
        category: "accessorise",
        length: accessorise.length,
        random: accessorise[generateRandomIdx(accessorise.length, 1)],
      },
    ];

    res.status(200).json(randomCollection);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

module.exports = {
  getProductsCollection,
  getProductsPerPage,
  getTopNew,
  getHotPrice,
  getRandom,
  getHero,
};
