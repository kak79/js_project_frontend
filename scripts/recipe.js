class Recipe{ // add ingredients to constructor (ingredient_ids)
  constructor(id,title, instructions){
    this.id = id;
    this.title = title;
    this.instructions = instructions; 
  }


  //instance method that renders the object to the DOM

  renderRecipe() {
    

    let recipeDiv = document.getElementById("recipes-container")
    // creating a new div element 
    let recipeCard = document.createElement('div')
    recipeCard.id = `${this.id}`
    recipeCard.className = "recipe-card"

    // we might want to create elements to append here rather than using innerHTML - asking friend who does JS assessments
    // debugger
    recipeCard.innerHTML += `
    <br>
    <ul>
    <h4>Recipe Title: ${this.title}</h4>

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

    <div class="ingredient-container">
    </div>
    
    <li>Instructions: ${this.instructions}</li>
    </ul>
    <br>
    <button class="del-bttn" data-id="${this.id}" onclick="deleteRecipe()">Delete Recipe</button>
    `
  
    recipeDiv.appendChild(recipeCard)

    this.makeNewIngredientForm()

    
  }

  makeNewIngredientForm() {
    let newIngredientDiv = document.getElementById(`${this.id}`).children[1].children[1]
    // console.log(newIngredientDiv)
    newIngredientDiv.addEventListener("submit", ingredientFormSubmit)
  
  }
  

}