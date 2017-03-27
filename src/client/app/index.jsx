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
    this.editRecipe = this.editRecipe.bind(this);
    this.state = {
      recipes: recipeJson.recipes
    }

  }
  addRecipe(value, isEdit) {
    let currentRecipes = this.state.recipes;
    let recipeObject = {};
    let ingredients = value.ingredientText.split(',');
    if (isEdit) {
      console.log("edit");
      console.log(currentRecipes);
      console.log(ingredients);
      console.log(value.recipeNameText);
      let index = this.getRecipeIndexByName(value.recipeNameText);
      console.log(index);
      console.log(currentRecipes[index]);
      currentRecipes[index].recipeName = value.recipeNameText;
      currentRecipes[index].ingredients = ingredients;
    } else {
      recipeObject['recipeName'] = value.recipeNameText;
      recipeObject['ingredients'] = ingredients;
      currentRecipes.push(recipeObject);
    }
    this.setState({
      recipes: currentRecipes,
      isEditModal: false
    });
  }
  deleteRecipe(recipeName) {
    this.setState({ recipes: this.filterOutRecipeByName(recipeName) });
  }
  editRecipe(recipeName) {
    this.setState({
      isEditModal: true,
      recipeToBeEdited: this.filterRecipeByName(recipeName)
    });
  }
  filterRecipeByName(recipeName) {
    return this.state.recipes.filter(obj => obj.recipeName == recipeName);

  }
  filterOutRecipeByName(recipeName) {
    return this.state.recipes.filter(obj => obj.recipeName != recipeName);
  }
  getRecipeIndexByName(recipeName){
   return this.state.recipes.findIndex((obj => obj.recipeName == recipeName));
  }
  render() {
    const recipeList = this.state.recipes.map((recipename) =>
      <MuiThemeProvider>
        <RecipeName
          recipeName={recipename.recipeName}
          onClick={this.showIngredients}
          ingredients={recipename.ingredients}
          onClick={this.deleteRecipe}
          onEdit={this.editRecipe}
        />
      </MuiThemeProvider>

    );
    console.log("rendering");
    return (
      <div className="container">
        <div style={{ marginTop: "10%" }}>
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
            isEditModal={this.state.isEditModal}
            recipeToBeEdited={this.state.recipeToBeEdited}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
