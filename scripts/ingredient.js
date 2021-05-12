class Ingredient{
  constructor(id, name, measurement, recipe_ids){
    this.id = id;
    this.name = name;
    this.measurement = measurement; 
    this.recipe_ids = recipe_ids;
    Ingredient.allIngredients.push(this);
  }

  static allIngredients = []

  static setIngName() {
    ingName = document.getElementById("ing-name").value;
    recipe2.ingredients_attributes.name = ingName;
  }

  static setIngMeasurement() {
    ingMeasur = document.getElementById("ing-measurement").value;
    recipe2.ingredients_attributes.measurement = ingMeasur;
  }

  static renderIngredient(r,i) {
    let recipeCard = document.getElementById(r.id);

    let ingredientUl = recipeCard.children[1].children[2];
    let ingredientDiv = document.createElement('div');
    ingredientDiv.innerHTML += `
    <br>
    <ul>
    <h4>Ingredient Name: ${i.name}</h4>
    <li>Ingredient Measurement: ${i.measurement}</li>
    </ul>
    `;
    ingredientUl.appendChild(ingredientDiv);
  }
}