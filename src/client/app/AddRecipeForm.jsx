import React from 'react';
import TextField from 'material-ui/TextField';

var AddRecipeForm = React.createClass({
  render() {
    console.log(this.props.recipeName);
    console.log(this.props.ingredients);
    return (
      <div>
        <TextField
          name="recipeName"
          value={this.props.recipeName}
          onChange={this.props.onChange}
          floatingLabelFixed={true}
          floatingLabelText="Recipe Name" />
          <br/>
        <TextField
          name="ingredients"
          value={this.props.ingredients}
          onChange={this.props.onChange}
          floatingLabelFixed={true}
          floatingLabelText="Ingredients" />
      </div>
    )
  }

});

module.exports = AddRecipeForm;


