import React from 'react';
import TextField from 'material-ui/TextField';

var AddRecipeForm = React.createClass({
  render() {
    return (
      <div>
        <TextField
          hintText="Recipe Name"
          name="recipeNameText"
          value={this.props.recipeName}
          onChange={this.props.onChange}
          floatingLabelText="Recipe Name" />
        <TextField
          hintText="Ingredients"
          name="ingredientText"
          value={this.props.ingredients}
          onChange={this.props.onChange}
          floatingLabelText="Ingredients" />
      </div>

    )
  }

});

module.exports = AddRecipeForm;


