document.addEventListener("DOMContentLoaded" , () => {
  
  Api.fetchRecipes();

  let recInput1 = document.getElementById("rec-title");
  recInput1.addEventListener("change", (e) => { Recipe.setRecTitle(e) });

  let recInput2 = document.getElementById("rec-instructions");
  recInput2.addEventListener("change", (e) => { Recipe.setRecInstruct(e) });

  let newRecipeForm = document.getElementById("new-recipe-form"); 
  newRecipeForm.addEventListener("submit", (e) => { Api.makeNewRecipe(e) });

  let ingInput1 = document.getElementById("ing-name");
  ingInput1.addEventListener("change", (e) => { Ingredient.setIngName(e) });

  let ingInput2 = document.getElementById("ing-measurement");
  ingInput2.addEventListener("change", (e) => { Ingredient.setIngMeasurement(e) });

  let searchBtn = document.getElementById("search-recipe-title-btn");
  searchBtn.addEventListener("click", (e) => { Api.createAnIngredient(e) });

})

const BASE_URL = "http://127.0.0.1:3000/recipes"

let sel = document.getElementById('dropdownMenuButton1');

let recTitle;

let recStructions;

let recID;

let ingName;

let ingMeasur;

let recipe = {
  title : recTitle,
  instructions : recStructions
}

let recipe2 = {
  id: recID,
  ingredients_attributes: {
    name: ingName,
    measurement: ingMeasur
  }
}
