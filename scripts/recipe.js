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
    
    for (let i = 0; i < len; i++) {
      let opt = document.createElement("option");
      let optTitle = Recipe.allRecipes[i].title
      opt.innerHTML = optTitle
      opt.value = Recipe.allRecipes[i].id;
      sel.appendChild(opt);
    }
    
    sel.addEventListener("change", Recipe.dropdownSubmit)
  }

  static dropdownSubmit() {
    let sel = document.getElementById("dropdownMenuButton1")
    let optValue = sel.querySelectorAll("option[value]")

    for (let i = 0; i < optValue.length; i++ ) {
      let optIndex = optValue[i].index
      
      for ( i = 0; i < Recipe.allRecipes.length; i++ ) { 

        if ( optIndex === Recipe.allRecipes[i].id ) { 

          console.log(Recipe.allRecipes[i]) 

        } else {

          // ????

        }
      }      
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
      Recipe.allRecipesDropdown()
    })
  }

  //CREATE -- add a new recipe 

  static makeNewRecipe() {
    let newRecipeForm = document.getElementById("new-recipe-form") 
    newRecipeForm.addEventListener("submit", Recipe.recipeFormSubmit)
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
    let newRecipeForm = document.getElementById("new-recipe-form")
    window.location.reload()
    newRecipeForm.reset() 
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
    
    <br>

    <li>Instructions: ${this.instructions}</li>
    </ul>
    `
  
    recipeDiv.appendChild(recipeCard)

  }
}