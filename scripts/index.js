document.addEventListener("DOMContentLoaded" , () => {
  
  Api.makeNewRecipe()
  
  Api.fetchRecipes()

  
  let input1 = document.getElementById("ing-name")

  let ingredientInput1 = input1.addEventListener("change", (e) => {
    Recipe.setIngName(e) 
  })

  let input2 = document.getElementById("ing-measurement")

  let ingredientInput2 = input2.addEventListener("change", (e) => {
    Recipe.setIngMeasurement(e) 
  })

  let searchBtn = document.getElementById("search-recipe-title-btn")
  searchBtn.addEventListener("click", (e) => { Api.ingredientFormSubmit() })

})

const BASE_URL = "http://127.0.0.1:3000"

let recID;

let ingName;

let ingMeasur;

let recipe = {
  id: recID,
  ingredients_attributes: {
    name: ingName,
    measurement: ingMeasur
  }
}
