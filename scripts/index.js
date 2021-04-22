document.addEventListener("DOMContentLoaded" , () => {
  mkNwRcpFrm()
  fetchRecipe()
})

const BASE_URL = "http://127.0.0.1:3000"

//READ -- fetch a recipe by title

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

//CREATE -- add a new recipe 

//create a form
//add and event listener
//once form is submitted => fetch 'post' to my backend
//do something with the returned object

function mkNwRcpFrm() {
  let newRecipeDiv = document.getElementById("new-recipe-form") 

  newRecipeDiv.innerHTML +=

  `
    <form>
      <label>Add A Recipe: </label><br>
      Recipe Title: &nbsp; <input type="text" id="title">
      <br>
      Recipe Instructions: &nbsp; <input type="text" id="instructions">
      <br>
      <input type="submit" value="Create Recipe">
    </form><br>
  `

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


//UPDATE -- edit a recipe -- stretch goal

//DELETE -- delete a recipe