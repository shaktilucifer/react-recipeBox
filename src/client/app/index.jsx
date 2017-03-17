import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let RecipeName = require('./RecipeName.jsx');
let Button = require('./Button.jsx');
let recipeJson = require('./defaultRecipes');
let DialogExampleSimple = require('./AddRecipeModal.jsx')



class App extends React.Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.handleModalOpenClose = this.handleModalOpenClose.bind(this);
    let recipes = recipeJson.recipes;
    this.state ={
      open: false
    }

  }
  addRecipe() {
    console.log("clicked add");
  }
  handleModalOpenClose(){
    let isModalOpen = this.state.open ? false : true;
    
        this.setState({open: isModalOpen});

  }
  render() {
    console.log(this.state);
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
          <Button onClick={this.handleModalOpenClose}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DialogExampleSimple open={this.state.open} />
        </MuiThemeProvider>

      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
