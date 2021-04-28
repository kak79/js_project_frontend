class Ingredient{
  constructor(id, name, measurement, recipe_id){
    this.id = id;
    this.name = name;
    this.measurement = measurement; 
    this.recipe_id = recipe_id;
  }

  renderIngredient(i) {

    let recipeCard = document.getElementById(i.recipe_id)

    let createIngredientForm;
    createIngredientForm.innerHTML += `
    <div class="add-ingredient-form" id="ing-${this.id}">
      <form>
        <label>Add An Ingredient to ${this.title}:</label><br>
        Recipe Ingredient: &nbsp; <input id="name" type="text" placeholder="ingredient">
        <br>
        Measurement for Ingredient: &nbsp; <input id="measurement" type="text" placeholder="measurement">
        <br>
        <input type="submit" value="Add Ingredient">
      </form>
    </div>
    `

    let ingredientUl = recipeCard.children[1].children[1]
    let ingredientDiv = document.createElement('div');
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

    ingredientUl.appendChild(ingredientDiv);
  }

  makeNewIngredientForm() {
    let newIngredientDiv = document.getElementById(`${this.id}`).children[1].children[1]
    // console.log(newIngredientDiv)
    newIngredientDiv.addEventListener("submit", ingredientFormSubmit)
  
  }

}