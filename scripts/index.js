document.addEventListener("DOMContentLoaded" , () => {
  makeNewRecipeForm()
  addNewIngredientsForm()
  fetchRecipe()
  fetchIngredient()
})

const BASE_URL = "http://127.0.0.1:3000"

//READ -- fetch a recipe

function fetchRecipe() {
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
  })
}

//READ -- fetch a ingredients by recipe id

function fetchIngredient() {
  fetch(`${BASE_URL}/ingredients`)
  .then(resp => resp.json())
  .then(ingredients => {
    //console.log(ingredients)
    //turn this data into a javascript object
    for( const ingredient of ingredients) {
      console.log('rails object', ingredient)
      let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement, ingredient.recipe_id)
      console.log('js object', i)
      // create ingredient div
      // give data-id 
      // i.renderIngredient();
    }
  })
}

//CREATE -- add a new recipe 

//create a form
//add and event listener
//once form is submitted => fetch 'post' to my backend
//do something with the returned object

function makeNewRecipeForm() {
  let newRecipeDiv = document.getElementById("new-recipe-form") 

  newRecipeDiv.addEventListener("submit", formSubmit)

}

function formSubmit() {
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

function addNewIngredientsForm() {
  let ingredientDiv = document.getElementById("add-ingredient-form") 

  ingredientDiv.addEventListener("submit", formSubmit)

  }

  function formSubmit() {
    event.preventDefault()
    let title = document.getElementById("name").value
    let instructions = document.getElementById("measurement").value
  
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
