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

function listItems(deliveryOrders) {
  // run array of orders through a loop
  // print to the console the (index).item for each order(element)
  var itemName = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemName += `${deliveryOrders[i].item}, `;
  }
  return itemName.substring(0, itemName.length - 2);
}

function searchOrder(deliveryOrders, food) {
  var orderItems = []
  for (var i = 0; i < deliveryOrders.length; i++) {
   orderItems.push(deliveryOrders[i].item);
  }
  return orderItems.includes(food);  
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}