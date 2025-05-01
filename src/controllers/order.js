const { Order } = require("../models/order");

const getOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await Order.find({ orderId: orderId });
    res.status(200).json(order);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

const createOrder = async (req, res, next) => {
  const { owner, order } = req.body;
  console.log(req.user, owner, order);
  try {
    const user = req.user
      ? {
          id: req.user._id,
          email: req.user.email,
          name: req.user.login,
          phone: req.user.phone,
        }
      : owner;

    console.log(user);
    const newOrder = await Order.create({
      orderId: generateOrderNumber(),
      owner: user,
      order: order,
    });

    res.status(200).json(newOrder);
  } catch (e) {
    res.status(400).json({ message: "No products" });
  }
};

function generateOrderNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let orderNumber = "";
  for (let i = 0; i < 7; i++) {
    orderNumber += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return orderNumber;
}

module.exports = {
  getOrder,
  createOrder,
};
