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
    opt.innerHTML = `<p>${r.id}  &nbsp; &nbsp;  ${r.title}<p>`;
    opt.value = r.id;
    sel.appendChild(opt);
    sel.addEventListener("change", (e) => Recipe.setRecID(e));
  }

  static setRecID(e) {
    recID = parseInt(e.target.value);
    recipe2.id = recID;
  }

  renderRecipe() {
    let recipeDiv = document.getElementById("recipes-container");
    let recipeCard = document.createElement('div');
    recipeCard.id = `${this.id}`;
    recipeCard.className = "recipe-card";

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
    `;
  
    recipeDiv.appendChild(recipeCard);

  }
}