import React from 'react';
import AppBar from 'material-ui/AppBar';
let Button = require('./Button.jsx');
let AddRecipeModal = require('./AddRecipeModal.jsx');

var AppBarExampleIcon = React.createClass({
  render() {
    return (
      <li>
        <div
          style={{ backgroundColor: 'lightgrey', color: 'black' }}
          className="collapsible-header">
          <b> RECIPE BOOK </b>
          <AddRecipeModal
            onClose={this.props.onClose}
            isEditModal={this.props.isEditModal}
            open={this.props.open}
            recipeToBeEdited={this.props.recipeToBeEdited}
          />
        </div>
      </li>
    )
  }
});

export default AppBarExampleIcon;