// declare var set to restaurant
  // add key for restaurant name set to (parameter)
  // nest object (menus)
  // inside menus, nest 3 keys that will each declare an array
function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {breakfast: [], lunch: [], dinner: []}
  };
  return restaurant;
}

// Two parameters [restaurant and menu item]
  // menu item is an object
  // add menu object to lunch menu
  // .push() method?
  // use comparison operator to be able to check menue type AND if it exists (.includes)
  // HINT* use if...else
function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem);
  // } else {
  }
}
// remove menue item based on 3 parameters (restaurant, item.name, item.type)
  // remove the element that contains menuItem(element.name)
  // run for loop that will search the array that corrosponds with (menuType)
  // write conditional that checks if the object is in the array, base this off of the itemName
  // if item exists, then delete. use splice to target specific index value
  // return statement based off of if item exists or not  
function removeMenuItem(restaurant, menuItem, menuType) {
  for (var i = 0; i < restaurant.menus[menuType].length; i++) {
    if (restaurant.menus[menuType][i].name === menuItem) {
      restaurant.menus[menuType].splice(i, 1); 
      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      } 
    }
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!` 
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}