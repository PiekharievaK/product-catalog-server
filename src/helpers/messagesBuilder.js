const createOrderMessage = (data) => {
  const { owner, orderId, order, price } = data;
  const orderList = order
    .map((item) => `\n ${item.id}<b>: ${item.count}</b>`)
    .join(",");

  const htmlMessage = `<b>Замовлення з сайту</b>\n
   <b>ID замовлення: </b>${orderId}\n
   <b>дата: </b>${data.date}\n
    <b>Отримувач: </b>${owner.name || owner.email}\n
    <b>Пошта: </b>${owner.email}\n
    <b>Телефон: </b>${owner.phone}\n
    <b>Адреса: </b> ${owner.adress}\n
    <b>Ціна: </b> ${price} $\n
    <b>Товари: </b> \n${orderList}\n`;

  return htmlMessage;
};

const createContactMessage = (data) => {
  const { name, email, phone, message } = data;

  const htmlMessage = `<b>Заявка з сайту</b>\n
      <b>Дата створення: </b>${data.date}\n
      <b>Відправник: </b>${name}\n
      <b>Пошта: </b>${email}\n
      <b>Телефон: </b>${phone}\n
      ${message.trim() ? `<b>Повідомлення: </b>${message}\n` : ""}`;
  return htmlMessage;
};

module.exports = { createContactMessage, createOrderMessage };
