import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let RecipeName = require('./RecipeName.jsx');
let Button = require('./Button.jsx');
let recipeJson = require('./defaultRecipes');



class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    // console.log(recipeJson.recipes)
    let recipes = recipeJson.recipes;

  }
  addRecipe() {
    console.log("clicked add");
  }
  render() {
    const recipeList = recipeJson.recipes.map((recipename) =>
      <RecipeName
        recipeName={recipename.recipeName}
        onClick={this.showIngredients}
        ingredients={recipename.ingredients}
        key={recipename.id} />
    );
    // console.log("rendering");
    return (
      <div className="container">
        <ul className="collapsible popout" data-collapsible="accordion">
          {recipeList}
        </ul>
        <MuiThemeProvider>
          <Button />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
