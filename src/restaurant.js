function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {breakfast: [], lunch: [], dinner: []}
  };
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  // Two parameters [restaurant and menu item]
  // menu item is an object
  // add menu object to lunch menu
  // .push() method?
  // for (var i = 0; i < restaurant.menus.length; i++) 
  if (menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem);
  } else {
  }
  // trigger true or false with comparison operator
  // operator compare menuItem.name with 
  // 
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}