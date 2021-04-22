class Recipe{
  constructor(id,title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
  }


  //instance method that renders the object to the DOM

  renderRecipe() {
    let recipeDiv = document.getElementById("recipes-container")

    recipeDiv.innerHTML +=

    `
    <ul>
    <h4>Recipe Title: ${this.title}</h4>
    <li>Instructions: ${this.instructions}</li>
    </ul>
    `
  }
}