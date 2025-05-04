const { User } = require("../models/user");

const addInfo = async (req, res, next) => {
  try {
    const {
      phone,
      name,
      adress: { city, srteet, building },
    } = req.body;
    await User.findByIdAndUpdate(req.user._id, {
      favourites: updatedFavourites,
    });

    res
      .status(200)
      .json({ favourites: req.user.favourites, cart: req.user.cart });
  } catch (e) {
    res.status(404).json({ message: "No products" });
  }
};

const getCollection = async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ favourites: req.user.favourites, cart: req.user.cart });
  } catch (e) {
    res.status(404).json({ message: "No products" });
  }
};

const getFavourites = async (req, res, next) => {
  try {
    res.status(200).json({ collection: req.user.favourites });
  } catch (e) {
    res.status(404).json({ message: "No products" });
  }
};
const addToFavourites = async (req, res, next) => {
  try {
    const { itemId } = req.params;

    if (req.user.favourites.includes(itemId)) {
      res.status(409).json({ message: "Already in your favourites" });
      return;
    }
    const updatedFavourites = [...req.user.favourites, itemId];

    await User.findByIdAndUpdate(req.user._id, {
      favourites: updatedFavourites,
    });

    res.status(200).json({ message: "Added to your favourites" });
  } catch (e) {
    res.status(400).json({ message: "Unsuccessful adding" });
  }
};

const deleteFromFavourites = async (req, res, next) => {
  const { itemId } = req.params;

  try {
    if (!req.user.favourites.includes(itemId)) {
      res.status(409).json({ message: "Not in your favourites" });
      return;
    }

    const updatedFavourites = req.user.favourites.filter(
      (item) => item !== itemId
    );

    await User.findByIdAndUpdate(req.user._id, {
      favourites: updatedFavourites,
    });
    res.status(200).json({ message: "Deleted from your favourites" });
  } catch (e) {
    res.status(400).json({ message: "Unsuccesfull deleting" });
  }
};

const getCard = async (req, res, next) => {
  try {
    res.status(200).json(req.user.cart);
  } catch (e) {
    res.status(404).json({ message: "No products" });
  }
};

const addToCard = async (req, res, next) => {
  try {
    const { itemId, count } = req.body;

    const onCard = req.user.cart.find((item) => itemId === item.id) || false;
    if (onCard && +onCard.count === +count) {
      res.status(409).json({ message: "Already in your cart" });
      return;
    }

    if (onCard && onCard.count !== count) {
      const updatedcard = req.user.cart.map((item) =>
        item.id === itemId ? { id: item.id, count: count } : item
      );

      await User.findByIdAndUpdate(req.user._id, {
        cart: updatedcard,
      });
      res.status(200).json({ message: "Count of items is update" });
      return;
    }

    const updatedcard = [...req.user.cart, { id: itemId, count: count }];

    await User.findByIdAndUpdate(req.user._id, {
      cart: updatedcard,
    });

    res.status(200).json({ message: "Added to your card" });
  } catch (e) {
    res.status(400).json({ message: "Unsuccessful adding" });
  }
};

const deleteFromCard = async (req, res, next) => {
  try {
    const { itemId } = req.body;
    const onCard = req.user.cart.find((item) => itemId === item.id) || false;
    if (!onCard) {
      res.status(409).json({ message: "Not in your card" });
      return;
    }

    const updatedCard = req.user.cart.filter((item) => item.id !== itemId);

    await User.findByIdAndUpdate(req.user._id, {
      cart: updatedCard,
    });
    res.status(200).json({ message: "Deleted from your card" });
  } catch (e) {
    res.status(400).json({ message: "Unsuccesfull deleting" });
  }
};

const clearCard = async (req, res, next)  => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      cart: [],
    });
    res.status(200).json({ message: "Deleted all from your card" });
  } catch (e) {
    res.status(400).json({ message: "Unsuccesfull deleting" });
  }
};

module.exports = {
  addInfo,
  getCollection,
  getFavourites,
  addToFavourites,
  deleteFromFavourites,
  getCard,
  addToCard,
  deleteFromCard,
  clearCard,
};
