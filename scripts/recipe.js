class Recipe { 
  constructor(id,title, instructions, ingredients){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
    this.ingredients = ingredients
    Recipe.allRecipes.push(this)
  }

  static allRecipes = []

  static allRecipesDropdown() {  
    // debugger
    let len = Recipe.allRecipes.length
    let sel = document.getElementById('dropdownMenuButton1');
    
    for (let i = 0; i < len; i++) {
      let opt = document.createElement("option");
      let optTitle = Recipe.allRecipes[i].title
      opt.innerHTML = optTitle
      opt.value = Recipe.allRecipes[i].id;
      // debugger
      sel.appendChild(opt);
    }
    // debugger
    sel.addEventListener("change", (e) => Recipe.setRecID(e))
      
  }

  static setRecID(e) {
    e.preventDefault()
    recID = event.target.value
    let subBtn = document.getElementById("new-ing-frm")
    subBtn.addEventListener("submit", (e) => Recipe.submitFormRecID(e, recID))
  }

  static submitFormRecID(recID) {
    e.preventDefault()
    Api.createAnIngredient()
  }


  static renderRecipe(r) {

    let recipeDiv = document.getElementById("recipes-container")
    let recipeCard = document.createElement('div')
    recipeCard.id = `${r.id}`
    recipeCard.className = "recipe-card"

    recipeCard.innerHTML += `
    <br>
    <ul>
    <h2>Recipe Title: ${r.title}</h2>

    <div class="makeIngForm">
    </div>

    <div class="ingredient-container">
    </div>
    
    <br>

    <li>Instructions: ${r.instructions}</li>
    </ul>
    `
  
    recipeDiv.appendChild(recipeCard)

  }
}