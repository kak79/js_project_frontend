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
    let singleRecipe = document.createElement('div')

    // we might want to create elements to append here rather than using innerHTML - asking friend who does JS assessments
    let button = document.createElement('button');
    button.id = `del-${this.id}`
    button.className = "del-bttn"
    button.innerText = "Delete Recipe"


    singleRecipe.innerHTML += `
    <br>
    <ul>
    <h4>Recipe Title: ${this.title}</h4>
    <li>Instructions: ${this.instructions}</li>
    <!-- display ingredients here -->
    </ul>
    `
    singleRecipe.appendChild(button);
    button.addEventListener("click", e => {
      console.log(e.target.parentElement)
      console.log('click!')
      let parent = e.target.parentElement
      parent.remove();
    })

    recipeDiv.appendChild(singleRecipe)
  }
}