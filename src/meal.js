function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(menuItemName, price, type) {
  var newItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return newItem
}

function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping)) {
  } else {
    ingredients.push(topping);
  }
}

function formatPrice(price) {
  return `$${price}`;
} 

function decreasePrice(value) {
// multiply the original value by 0.1
// take the new value and subtract it from original value
decreasedPrice = value - (value * 0.1);
return decreasedPrice;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


