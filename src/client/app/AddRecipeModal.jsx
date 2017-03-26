import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
let Button = require('./Button.jsx');
let AddRecipeForm = require('./AddRecipeForm.jsx');



var AddRecipeModal = React.createClass({
  getInitialState() {
    return this.state = {
      open: false,
      recipeNameText: '',
      ingredientText: ''
        };
  },
  handleOpen() {
    this.setState({ open: true });
  },
  handleClose() {
    this.setState({ open: false });
  },
  handleSave(e) {
    this.props.onClose(this.state);
    this.handleClose();
  },
  handleChange(e) {
    let stateObj = {};
    stateObj[e.target.name] = e.target.value;
    this.setState(stateObj);
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSave}
      />,
    ];

    return (
      <div>
        <Button onClick={this.handleOpen} />
        <Dialog
          title="Add Recipes!"
          modal={false}
          actions={actions}
          open={this.state.open || this.props.isEditModal}
          onRequestClose={this.handleClose}
        >
          <AddRecipeForm
          onChange={this.handleChange}
          recipeName={!this.props.isEditModal ? this.state.recipeName : this.props.recipeToBeEdited}
          ingredients={this.state.ingredients}
        />
       
        </Dialog>
      </div>
    );
  }
});

module.exports = AddRecipeModal;