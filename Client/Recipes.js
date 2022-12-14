async function getLasagne() {
  const response = await fetch('http://localhost:3000/recipes/lasagne');
  const recipes = response.json();
  recipes.then(data => {
    const table = document.getElementById("recipe2Table")
    table.insertRow().innerHTML = data.Name;
    table.insertRow().innerHTML = "Beef: " + data.BeefGram + "g"
    table.insertRow().innerHTML = "Dish Length: " + data.DishCentimeter + "cm"
    table.insertRow().innerHTML = "Sheets: " + data.SheetsGram + "g"
    table.insertRow().innerHTML = "Temperature: " + data.TemperatureCelcius  + "°C"
    table.insertRow().innerHTML = "Tomato: " + data.TomatosauceGram + "g"
  });
}

async function getPancakes() {
  const response = await fetch('http://localhost:3000/recipes/pancakes');
  const recipes = response.json();
  recipes.then(data => {
    const table = document.getElementById("recipe1Table")
    table.insertRow().innerHTML = data.Name;
    table.insertRow().innerHTML = "Butter: " + data.ButterGram + "g"
    table.insertRow().innerHTML = "Milk: " + data.MilkMilliliter + "ml"
    table.insertRow().innerHTML = "Sugar" + data.SugarGram + "g"
    table.insertRow().innerHTML = "Length: " + data.PancakelengthCentimeter + "cm"
    table.insertRow().innerHTML = "Temperature: " + data.TemperatureCelcius  + "°C"
  });
}

getLasagne()
getPancakes()