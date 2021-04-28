document.addEventListener("DOMContentLoaded" , () => {
  makeNewRecipe()
  fetchRecipes()
})

const BASE_URL = "http://127.0.0.1:3000"

//READ -- fetch a recipe

function fetchRecipes() {
  fetch(`${BASE_URL}/recipes`)
  .then(resp => resp.json())
  .then(recipes => {
    for( const recipe of recipes) {
      let r = new Recipe(recipe.id, recipe.title, recipe.instructions)
      r.renderRecipe();
    }
    fetchIngredients()
  })
}

//READ -- fetch each ingredient

function fetchIngredients() {
  fetch(`${BASE_URL}/ingredients`)
  .then(resp => resp.json())
  .then(ingredients => {
    for( const ingredient of ingredients) {
      let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement, ingredient.recipe_id)
      i.renderIngredient(i);
    }
  })
}

//CREATE -- add a new recipe 

function makeNewRecipe() {
  let newRecipeDiv = document.getElementById("new-recipe-form") 
  newRecipeDiv.addEventListener("submit", recipeFormSubmit)
}

function recipeFormSubmit() {
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
  .then(recipes => {
      let r = new Recipe(recipe.id, recipe.title, recipe.instructions)
      r.renderRecipe();
    })
}

//CREATE -- add a new ingredients to a recipe 

//create a form
//add and event listener
//once form is submitted => fetch 'post' to my backend
//do something with the returned object



function ingredientFormSubmit(event) {
  event.preventDefault()
  // debugger
  let name = document.getElementById("name").value
  let measurement = document.getElementById("measurement").value

  console.log(name, measurement)
  
  // let ingredient = {
  //   name: name,
  //   measurement: measurement
  // }

  // fetch(`${BASE_URL}/ingredients`, {
  //   method: 'POST',
  //   headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //   body: JSON.stringify(ingredient)  
  // })
  // .then(resp => console.log(resp))
//   .then(resp => resp.json())
//   .then(ingredients => {
//       let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement, ingredient.recipe_id)
//       r.renderIngredient();
//     })
}
 


//UPDATE -- edit a recipe -- stretch goal

//UPDATE -- edit recipe ingredients -- stretch goal


//DELETE

function deleteRecipe() {
  let recipeId = parseInt(event.target.dataset.id)

  fetch(`${BASE_URL}/recipes/${recipeId}`, {
    method: 'DELETE'
  })
}