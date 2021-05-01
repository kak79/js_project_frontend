document.addEventListener("DOMContentLoaded" , () => {
  
  Recipe.makeNewRecipe()
  
  Recipe.fetchRecipes()

  resetFunction1()

  resetFunction2()

  resetFunction3()

})

const BASE_URL = "http://127.0.0.1:3000"


function resetFunction1() {
  // debugger
  // document.getElementById("new-recipe-form").reset();
}

function resetFunction2() {
  // document.getElementById("recipe-search-div").reset();
}

function resetFunction3() {
  // document.getElementById("add-ingredient-form").reset();
}


//UPDATE -- edit a recipe -- stretch goal

//UPDATE -- edit recipe ingredients -- stretch goal


