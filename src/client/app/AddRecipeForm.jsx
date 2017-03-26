import React from 'react';
import TextField from 'material-ui/TextField';

var AddRecipeForm = React.createClass({
  render() {
    console.log(this.props.recipeName);
    return (
      <div>
        <TextField
          name="recipeNameText"
          value={this.props.recipeName}
          onChange={this.props.onChange}
          floatingLabelFixed={true}
          floatingLabelText="Recipe Name" />
          <br/>
        <TextField
          name="ingredientText"
          value={this.props.ingredients}
          onChange={this.props.onChange}
          floatingLabelFixed={true}
          floatingLabelText="Ingredients" />
      </div>
    )
  }

});

module.exports = AddRecipeForm;


