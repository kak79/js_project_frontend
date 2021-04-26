class Ingredient{
  constructor(id, name, measurement, recipe_id){
    this.id = id;
    this.name = name;
    this.measurement = measurement; 
    this.recipe_id = recipe_id;
  }


  //instance method that renders the object to the DOM

  // create renderIngredients function -- take in an ingredients argument
  // call renderIngredient(ingredient) within this function

  renderIngredient(i) {

    let recipeCard = document.getElementById(i.recipe_id)

    debugger

    let ingredientDiv = recipeCard.appendChild(i)
  
    
    console.log(ingredientDiv)

    ingredientDiv.innerHTML += `
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