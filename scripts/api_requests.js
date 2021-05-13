class Api{

  //READ -- fetch a recipe and it's ingredients

  static fetchRecipes() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(recipes => {
      for( const recipe of recipes) {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions);
        r.renderRecipe();
          recipe.ingredients.forEach(
            ingredient => {
              let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement);
              i.renderIngredient(r);
            })
      }
    })   
  }

  //CREATE -- add a new recipe 

  static makeNewRecipe(e) {  
    e.preventDefault();

    fetch(BASE_URL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(recipe)  
    })
    .then(resp => resp.json())
    .then(recipe => {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions);
        r.renderRecipe();
      })
    let newRecipeForm = document.getElementById("new-recipe-form");
    newRecipeForm.reset();
  }

//EDIT -- add a new ingredients to a recipe by editing a recipe

  static createAnIngredient(e) {
    e.preventDefault()
    fetch(`${BASE_URL}/${recipe2.id}`, {
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(recipe2)  
    })
    .then(resp => resp.json())
    .then(recipe => {
      let ingredient = recipe.ingredients[recipe.ingredients.length - 1 ]
          let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement);
          i.renderIngredient(recipe);
    })
    let newIngForm = document.getElementById("new-ing-frm");
    newIngForm.reset(); 
  }
}
