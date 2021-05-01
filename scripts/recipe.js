class Recipe{ 
  constructor(id,title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
    Recipe.allRecipes.push(this)
  }

  static allRecipes = []

  static allRecipesDropdown() {  
    let len = Recipe.allRecipes.length
    let sel = document.getElementById('dropdownMenuButton1');
    let opt = document.createElement("option");
    for(let i = 0; i < len; i++) {
      opt.innerHTML = Recipe.allRecipes[i].title
      opt.value = Recipe.allRecipes[i].id;
      sel.appendChild(opt);
    }
    sel.addEventListener("change", Recipe.dropdownSubmit)
  }

  static dropdownSubmit() {
    debugger
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
      Recipe.allRecipesDropdown()
      // Recipe.deleteRecipe()
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

  // static deleteRecipe() {
  //   let len = Recipe.allRecipes.length
  //   for(let i = 0; i < len; i++) {
  //     let delId = Recipe.allRecipes[i].id;

  //     fetch(`${BASE_URL}/recipes/${delId}`, {
  //       method: 'DELETE'
  //     })
  //   }
  //   window.location.reload()
  // }


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