class Recipe { 
  constructor(id, title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
    Recipe.allRecipes.push(this);
    Recipe.appendTheDropdown(this);
  }

  static allRecipes = [];

  static setRecTitle() { 
    recTitle = document.getElementById("rec-title").value;
    recipe.title = recTitle;
  }

  static setRecInstruct() {
    recStructions = document.getElementById("rec-instructions").value;
    recipe.instructions = recStructions;
  }

  static appendTheDropdown(r) {
    let opt = document.createElement("option");
    opt.innerHTML = r.title;
    opt.value = r.id;
    sel.appendChild(opt);
    
    sel.addEventListener("change", (e) => Recipe.setRecID(e));
  }

  static setRecID(e) {
    e.preventDefault();
    recID = parseInt(e.target.value);
    recipe2.id = recID;
  }

  static renderRecipe(r) {
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