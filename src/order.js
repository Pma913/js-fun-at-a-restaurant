function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  } else {
  }
  return deliveryOrders
}

function refundOrder(orderNumber, deliveryOrders) {
  // finds element that contains a specific number then removes that element
  // create a loop to search the array.
  // if statement that targets (array index value).order number
  // set targer equal to order number
  // if conditions match then remove index that belongs to that element
  // else can be left blank
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice([i],1);
    } else {
    }
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}