class Recipe{ 
  constructor(id,title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
  }


  renderRecipe() {

    let recipeDiv = document.getElementById("recipes-container")
    let recipeCard = document.createElement('div')
    recipeCard.id = `${this.id}`
    recipeCard.className = "recipe-card"

    recipeCard.innerHTML += `
    <br>
    <ul>
    <h4>Recipe Title: ${this.title}</h4>

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