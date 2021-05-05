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
    
    let sel = document.getElementById('dropdownMenuButton1');
    
    for (let i = 0; i < Recipe.allRecipes.length; i++) {
      let opt = document.createElement("option");
      let optTitle = Recipe.allRecipes[i].title
      opt.innerHTML = optTitle
      opt.value = Recipe.allRecipes[i].id;
      
      sel.appendChild(opt);
    }
    // debugger
    sel.addEventListener("change", (e) => Recipe.setRecID(e))
      
  }

  static setRecID(e) {
    e.preventDefault()
    // debugger
    recID = parseInt(e.target.value)
    recipe.id = recID
    // console.log(recipe)
    
  }

   static setIngName() {
    let ingName = document.getElementById("ing-name").value
    console.log(ingName)
    recipe.ingredients_attributes.name = ingName
    console.log(recipe)

    // let subBtn = document.getElementById("new-ing-frm")
    // console.log(subBtn)
    // subBtn.addEventListener("submit", (e) => Recipe.submitFormRecID(e))

   }

   static setIngMeasurement() {

    let ingMeasur = document.getElementById("ing-measurement").value
    recipe.ingredients_attributes.measurement = ingMeasur
    console.log(ingMeasur)
    console.log(recipe)


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