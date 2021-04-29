class Recipe{ 
  constructor(id,title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
    Recipe.allRecipes.push(this)
  }

  static allRecipes = []

  static findRecipeByTitle() {
    let title = document.getElementById("recipe-search-div")
    console.log(title)
    title.addEventListener("submit", Recipe.findRecipeTitleSubmit)
  }

  static findRecipeTitleSubmit() {
    event.preventDefault()

    debugger

    let searchString = document.getElementById("search-string")
    let recipeTitle = Recipe.allRecipes.find(element => element.title === searchString.value)

    if ( recipeTitle.title === searchString.value ) {
      console.log(recipeTitle)
      debugger
      //hide all the other recipes or put a red box aroud the recipe
    } else {
      window.alert("No Recipe by that Title! Try Again!")
    }

  }

//READ -- fetch a recipe

  static fetchRecipes() {
    fetch(`${BASE_URL}/recipes`)
    .then(resp => resp.json())
    .then(recipes => {
      for( const recipe of recipes) {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions)
        r.renderRecipe();
      }
      Ingredient.fetchIngredients()
    })
  }

  //CREATE -- add a new recipe 

  static makeNewRecipe() {
    let newRecipeDiv = document.getElementById("new-recipe-form") 
    newRecipeDiv.addEventListener("submit", Recipe.recipeFormSubmit)
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
    .then(recipes => {
        let r = new Recipe(recipe.id, recipe.title, recipe.instructions)
        r.renderRecipe();
      })
  }

  //DELETE a recipe

  static deleteRecipe() {
    let recipeId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/recipes/${recipeId}`, {
      method: 'DELETE'
    })
  }


  renderRecipe() {

    let recipeDiv = document.getElementById("recipes-container")
    let recipeCard = document.createElement('div')
    recipeCard.id = `${this.id}`
    recipeCard.className = "recipe-card"

    recipeCard.innerHTML += `
    <br>
    <ul>
    <h2>Recipe Title: ${this.title}</h2>

    <div class="makeIngForm">
    </div>

    <div class="ingredient-container">
    </div>
    
    <li>Instructions: ${this.instructions}</li>
    </ul>
    <br>
    <button class="del-bttn" data-id="${this.id}" onclick="deleteRecipe()">Delete Recipe</button>
    `
  
    recipeDiv.appendChild(recipeCard)

  }
}