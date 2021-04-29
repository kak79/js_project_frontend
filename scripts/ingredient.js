class Ingredient{
  constructor(id, name, measurement, recipe_id){
    this.id = id;
    this.name = name;
    this.measurement = measurement; 
    this.recipe_id = recipe_id;
    Ingredient.allIngredients.push(this)
  }

  static allIngredients = []

//READ -- fetch each ingredient

  static fetchIngredients() {
    fetch(`${BASE_URL}/ingredients`)
    .then(resp => resp.json())
    .then(ingredients => {
      for( const ingredient of ingredients) {
        let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement, ingredient.recipe_id)
        i.renderIngredient(i);
      }
    })
  }


  //CREATE -- add a new ingredients to a recipe 

  //create a form
  //add and event listener
  //once form is submitted => fetch 'post' to my backend
  //do something with the returned object



  // static makeNewIngredientForm() {
  //   debugger
  //   console.log(newIngredientDiv)
  //   newIngredientDiv.addEventListener("submit", ingredientFormSubmit)
  
  // }

  // static ingredientFormSubmit(event) {
  //   event.preventDefault()
  //   // debugger
  //   let name = document.getElementById("name").value
  //   let measurement = document.getElementById("measurement").value

  //   console.log(name, measurement)
    
    // let ingredient = {
    //   name: name,
    //   measurement: measurement
    // }

    // fetch(`${BASE_URL}/ingredients`, {
    //   method: 'POST',
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   body: JSON.stringify(ingredient)  
    // })
    // .then(resp => console.log(resp))
  //   .then(resp => resp.json())
  //   .then(ingredients => {
  //       let i = new Ingredient(ingredient.id, ingredient.name, ingredient.measurement, ingredient.recipe_id)
  //       r.renderIngredient();
  //     })
  // }


  renderIngredient(i) {

    let recipeCard = document.getElementById(i.recipe_id)

    let ingredientUl = recipeCard.children[1].children[2]
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
}