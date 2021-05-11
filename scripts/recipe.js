class Recipe { 
  constructor(id, title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
    Recipe.allRecipes.push(this);
  }

  static allRecipes = []

  static setRecTitle() {
    recTitle = document.getElementById("rec-title").value;
    
    recipe.title = recTitle;
  }

  static setRecInstruct() {
    recStructions = document.getElementById("rec-instructions").value;
    recipe.instructions = recStructions;
  }


  static allRecipesDropdown() {    
    let sel = document.getElementById('dropdownMenuButton1');
    
    for (let i = 0; i < Recipe.allRecipes.length; i++) {
      let opt = document.createElement("option");
      let optTitle = Recipe.allRecipes[i].title
      opt.innerHTML = optTitle
      opt.value = Recipe.allRecipes[i].id;
      
      sel.appendChild(opt);
    }

    sel.addEventListener("change", (e) => Recipe.setRecID(e));
  }

  static setRecID(e) {
    e.preventDefault();
    recID = parseInt(e.target.value);
    recipe2.id = recID;
  }



  static renderRecipe(r) {
    // debugger
    let recipeDiv = document.getElementById("recipes-container");
    let recipeCard = document.createElement('div');
    recipeCard.id = `${r.id}`;
    recipeCard.className = "recipe-card";

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
    `;
  
    recipeDiv.appendChild(recipeCard);

  }
}