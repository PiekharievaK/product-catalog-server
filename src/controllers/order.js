const { Order } = require("../models/order");
const { ProductGeneral } = require("../models/productGeneral");

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
  try {
    const user = req.user
      ? {
          id: req.user._id,
          email: req.user.email,
          name: req.user.login,
          phone: req.user.phone,
          adress: req.user.adress,
        }
      : owner;

    const products = await ProductGeneral.find();

    let totalPrice = 0;

    const updatedOrder = order.map((item) => {
      const product = products.find(prod => prod.itemId === item.id);

      if (!product) {
        return null;
      }

      const price = parseFloat(product.price);
      const quantity = parseInt(item.count, 10);

      if (isNaN(price) || isNaN(quantity)) {
        return null;
      }

      const itemPrice = price * quantity;
      totalPrice += itemPrice;

      return { ...item, price: itemPrice };
    });

    const validOrder = updatedOrder.filter(item => item !== null);

    if (validOrder.length === 0) {
      throw new Error("No valid products found in the order.");
    }

    const newOrder = await Order.create({
      orderId: generateOrderNumber(),
      owner: user,
      order: validOrder,
      price: totalPrice,
    });

    res.status(200).json(newOrder);
  } catch (e) {
    res.status(400).json({ message: e.message || "No products or error in calculation" });
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
