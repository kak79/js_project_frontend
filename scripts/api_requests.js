class Api{

  

  //READ -- fetch a recipe and it's ingredients

  static fetchRecipes() {
    fetch(`${BASE_URL}/recipes`)
    .then(resp => resp.json())
    .then(recipes => {
      for( const recipe of recipes) {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions, recipe.ingredients);
        
        Recipe.renderRecipe(r);
          recipe.ingredients.forEach(
            ingredient => {
              let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement);
              Ingredient.renderIngredient(r,i);
            })
      }
    })
    
  }

  //CREATE -- add a new recipe 

  static makeNewRecipe() {
    let newRecipeForm = document.getElementById("new-recipe-form"); 
    newRecipeForm.addEventListener("submit", Api.recipeFormSubmit);
  }

  static recipeFormSubmit() {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let instructions = document.getElementById("instructions").value;

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
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions, recipe.ingredients);
        Recipe.renderRecipe(r);
      })
    let newRecipeForm = document.getElementById("new-recipe-form");
    newRecipeForm.reset();
  }

//CREATE -- add a new ingredients to a recipe 

  static ingredientFormSubmit(recID) {
    event.preventDefault()
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
      
      Recipe.renderRecipe(recipe)
      Ingredient.renderIngredient(recipe, recipe.ingredients);
    })
    let newIngInputA = document.getElementById("two-c");
    newIngInputA.reset();
    let newIngInputB = document.getElementById("two-c");
    newIngInputB.reset();
  }
}
