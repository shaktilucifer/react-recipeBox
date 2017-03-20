import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarHeader from './AppBar.jsx';

let RecipeName = require('./RecipeName.jsx');
let recipeJson = require('./defaultRecipes');
let AddRecipeModal = require('./AddRecipeModal.jsx');

class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.state = {
      recipes: recipeJson.recipes
    }

  }
  addRecipe(value) {
    console.log("added");
    let currentRecipes = this.state.recipes;
    let recipeObject = {};
    let ingredients = value.ingredientText.split(',');
    recipeObject['recipeName'] = value.recipeNameText;
    recipeObject['ingredients'] = ingredients;
    currentRecipes.push(recipeObject);
    this.setState({
      recipes: currentRecipes
    });
  }
  deleteRecipe(recipeName){
    const recipes = this.state.recipes.filter(obj => obj.recipeName != recipeName);
    this.setState({recipes: recipes});
    console.log("Deleted");
    
  }

  render() {
    const recipeList = this.state.recipes.map((recipename) =>
     <MuiThemeProvider>
      <RecipeName
        recipeName={recipename.recipeName}
        onClick={this.showIngredients}
        ingredients={recipename.ingredients}
        onClick={this.deleteRecipe}
      />
                </MuiThemeProvider>

    );
    return (
      <div className="container">
        <div style={{marginTop: "10%"}}>
          <ul
            style={{ margin: 0, padding: 0 }}
            className="collapsible popout"
            data-collapsible="accordion" >
               <MuiThemeProvider>
            <AppBarHeader />
          </MuiThemeProvider>
            {recipeList}
          </ul>
        </div>
        <MuiThemeProvider>

          <AddRecipeModal
            onClose={this.addRecipe}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
