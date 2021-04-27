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
    //console.log(recipes)
    //turn this data into a javascript object
    for( const recipe of recipes) {
      //console.log('rails object', recipe)
      let r = new Recipe(recipe.id, recipe.title, recipe.instructions)
      //console.log('js object', r)
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
      // create ingredient div
      // give data-id 
      i.renderIngredient(i);
    }
  })
 
}





//CREATE -- add a new recipe 

//create a form
//add and event listener
//once form is submitted => fetch 'post' to my backend
//do something with the returned object

function makeNewRecipe() {
  let newRecipeDiv = document.getElementById("new-recipe-form") 
  // console.log(newRecipeDiv)
  newRecipeDiv.addEventListener("submit", recipeFormSubmit)

}

function recipeFormSubmit() {
  event.preventDefault()
  let title = document.getElementById("title").value
  let instructions = document.getElementById("instructions").value

  // console.log(title, instructions)

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
  // .then(resp => console.log(resp))
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



function ingredientFormSubmit() {
  event.preventDefault()
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