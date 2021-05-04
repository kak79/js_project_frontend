document.addEventListener("DOMContentLoaded" , () => {
  
  Api.makeNewRecipe()
  
  Api.fetchRecipes()

  

})

const BASE_URL = "http://127.0.0.1:3000"

let recID;