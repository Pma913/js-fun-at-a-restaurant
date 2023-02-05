function nameMenuItem(food) {
  return `Delicious ${food}`;
}

// take three parameters and make an object
  // make a variable
  // set all the parameters to their coresponding key values
  // return variable
function createMenuItem(menuItemName, price, type) {
  var newItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return newItem
}

// create function that adds ingredients
  // take two parameters
  // test if an argument exists
  // push unique toppings
function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping)) {
  } else {
    ingredients.push(topping);
  }
  return ingredients
}
// format price
  // interpolate price
function formatPrice(price) {
  return `$${price}`;
} 

// take 10% off price
  // multiply the original value by 0.1
  // take the new value and subtract it from original value
function decreasePrice(value) {
var decreasedPrice = value - (value * 0.1);
return decreasedPrice;
}

// create recipe from 3 parameters
  // create variable and that takes in the arguments in coresponding keys
function createRecipe(title, ingredients, menuItemType) {
  var newRecipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return newRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


