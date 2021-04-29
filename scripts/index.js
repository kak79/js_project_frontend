document.addEventListener("DOMContentLoaded" , () => {
  Recipe.makeNewRecipe()
  
  Recipe.fetchRecipes()

  Recipe.findRecipeByTitle()

  // resetFunction()

})

const BASE_URL = "http://127.0.0.1:3000"


// function resetFunction() {
//   document.getElementById("new-recipe-form").reset();
// }


//UPDATE -- edit a recipe -- stretch goal

//UPDATE -- edit recipe ingredients -- stretch goal


