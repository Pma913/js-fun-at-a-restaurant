function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(item) {
  var newItem = {
    name: item,
    price: 10.99,
    type: "breakfast"
  }
  return newItem
}

function addIngredients(topping, ingredients) {
  ingredients.push(topping);
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


