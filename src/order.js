// take order
  // add orders to a list
  // take in two parameters (order object, list)
  // push order to the list
  // give list a cap of 3 items by using a '<' comparison operator
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  } else {
  }
  return deliveryOrders
}

// refunds order
  // finds element that contains a specific number then removes that element
  // create a loop to search the array.
  // create an 'if' statement that targets => (array index value).order number
  // set target equal to order number
  // if conditions match then remove index that belongs to that element
  // else can be left blank
function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice([i],1);
    } else {
    }
  }
  return deliveryOrders;
}

// list order items
  // create a variable, assign it an empty string
  // run array 'deliveryOrders through a loop
  // add the (index).item of each object to the new variable as a string
  // use interpolation to include the ',' ands spaces (' ')
  // find built in object that will remove parts of a string
  // .substring can remove parts of a string. Declare starting string index and ending, then .substring gets rif of everything surrounding
  // return new variable with .substring attached
function listItems(deliveryOrders) {
  var itemName = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemName += `${deliveryOrders[i].item}, `;
  }
  return itemName.substring(0, itemName.length - 2);
}

// find if an order is in a list
  // declare a variable set to an empty array
  // run for loop on the orders (deliveryOrders)
  // pull out the item names and place them in the new array
  // check if the food argument is in the new array with .includes
  // return to console
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