class Api{

  //READ -- fetch a recipe

  static fetchRecipes() {
    fetch(`${BASE_URL}/recipes`)
    .then(resp => resp.json())
    .then(recipes => {
      for( const recipe of recipes) {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions, recipe.ingredients)
        
        Recipe.renderRecipe(r);
          recipe.ingredients.forEach(
            ingredient => {
              let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement)
              Ingredient.renderIngredient(r,i);
          })
        
      }
      
      Recipe.allRecipesDropdown()
    })
  }

  //CREATE -- add a new recipe 

  static makeNewRecipe() {
    let newRecipeForm = document.getElementById("new-recipe-form") 
    newRecipeForm.addEventListener("submit", Api.recipeFormSubmit)
  }

  static recipeFormSubmit() {
    event.preventDefault()
    let title = document.getElementById("title").value
    let instructions = document.getElementById("instructions").value

    let recipe = {
      title: title,
      instructions: instructions
    }

    fetch(`${BASE_URL}/recipes`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(recipe)  
    })
    .then(resp => resp.json())
    .then(recipe => {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions, recipe.ingredients)
        Recipe.renderRecipe(r);
      })
    let newRecipeForm = document.getElementById("new-recipe-form")
    window.location.reload()
    newRecipeForm.reset() 
  }




//CREATE -- add a new ingredients to a recipe 

  // static createAnIngredient(recID) {
    // debugger
    // let newIngredientDiv = document.getElementById("add-ingredient-form")
    // newIngredientDiv.addEventListener("submit", Api.ingredientFormSubmit(recID))

  // }

  static ingredientFormSubmit(recID) {
    // debugger
    event.preventDefault()
    // let name = document.getElementById("name").value
    // let measurement = document.getElementById("measurement").value

    // recipe = {
    //   id: recID,
    //   ingredients_attributes: {
    //     name: name,
    //     measurement: measurement
    //   }
    // }
    

    fetch(`${BASE_URL}/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(recipe)  
    })
    .then(resp => resp.json())
    .then(recipe => {
      console.log(recipe)
      // Ingredient.renderIngredient(recipe,i);
      // find recipe div with all ingredients + new one on dom and replace with updated object
      window.location.reload()
    })
  }
}
