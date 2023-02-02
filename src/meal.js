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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


