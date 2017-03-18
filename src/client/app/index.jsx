import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let RecipeName = require('./RecipeName.jsx');
let recipeJson = require('./defaultRecipes');
let AddRecipeModal = require('./AddRecipeModal.jsx')


class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.state ={
      recipes: recipeJson.recipes
    }

  }
  addRecipe() {
    console.log("clicked add");
    console.log(this.state.recipes);
  }

  render() {
    const recipeList = this.state.recipes.map((recipename) =>
      <RecipeName
        recipeName={recipename.recipeName}
        onClick={this.showIngredients}
        ingredients={recipename.ingredients}
        key={recipename.id} />
    );
    return (
      <div className="container">
        <ul className="collapsible popout" data-collapsible="accordion">
          {recipeList}
        </ul>
        <MuiThemeProvider>
          <AddRecipeModal
           onClose ={this.addRecipe}
           />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
