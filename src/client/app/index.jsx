import React from 'react';
import { render } from 'react-dom';
let RecipeName = require('./RecipeName.jsx');
let Ingredients = require('./Ingredients.jsx');
let Button = require('./Button.jsx');
let recipeJson = require('./defaultRecipes');

class App extends React.Component {
  constructor() {
    super();

    this.showIngredients = this.showIngredients.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    console.log(recipeJson.recipes)
    let recipes = recipeJson.recipes;
  
  }
  showIngredients(e) {
    console.log(this);
    let showIng = this.state.showIngredient ? false : true;
    this.setState({
      showIngredient: showIng
    })
  }
  addRecipe() {
    console.log("clicked add");
  }
  render() {
    const recipeList = recipeJson.recipes.map((recipename) =>
      <div>
        <RecipeName
          recipeName={recipename.recipeName}
          onClick={this.showIngredients}
          ingredients={recipename.ingredients}
          showHideIng={this.state.recipename.id}
          key={recipename.id} />
      </div>
    );
    console.log("rendering");
    return (
      <div className="container">
        {recipeList}
        <Button name="Add" onClick={this.addRecipe} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
