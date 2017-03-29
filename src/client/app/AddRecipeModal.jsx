import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Divider from 'material-ui/Divider';
let Button = require('./Button.jsx');
let AddRecipeForm = require('./AddRecipeForm.jsx');

var AddRecipeModal = React.createClass({
  getInitialState() {
    this.state = {
      open: false,
      recipeName: '',
      ingredients: ''
    };
    return this.state;
  },
  handleOpen() {
    this.setState({ open: true });
  },
  handleClose() {
    this.props.isEditModal = false;
    this.setState({ open: false });
  },
  handleSave(e) {
    let recipe = this.state;
    if(this.props.isEditModal){
      recipe = this.props.recipeToBeEdited[0];
    };
    this.props.onClose(recipe,this.props.isEditModal);
    this.handleClose();
  },
  handleChange(e) {
    if (this.props.isEditModal) {
      if (e.target.name == "recipeName") {
        this.props.recipeToBeEdited[0].recipeName = e.target.value;
      }else{
        this.props.recipeToBeEdited[0].ingredients = e.target.value;
      }
    };
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
            recipeName={!this.props.isEditModal ? this.state.recipeName : this.props.recipeToBeEdited[0].recipeName}
            ingredients={!this.props.isEditModal ? this.state.ingredients : this.props.recipeToBeEdited[0].ingredients}
          />
        </Dialog>
      </div>
    );
  }
});

module.exports = AddRecipeModal;