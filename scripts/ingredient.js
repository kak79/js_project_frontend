class Ingredient{
  constructor(id, name, measurement, recipe_id){
    this.id = id;
    this.name = name;
    this.measurement = measurement; 
    this.recipe_id = recipe_id;
  }


  //instance method that renders the object to the DOM

  renderRecipe() {
    let ingredientDiv = document.getElementById("ingredients-container")

    ingredientDiv.innerHTML +=

    `
    <br>
    <ul>
    <h4>Ingredient Name: ${this.name}</h4>
    <li>Ingredient Measurement: ${this.measurement}</li>
    </ul>
    <br>
    &nbsp;<button class="delete-button" data-id="${this.id}">Delete Ingredient</button>
    <br>
    `
  }
}

