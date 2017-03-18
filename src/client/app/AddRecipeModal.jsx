import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
let Button = require('./Button.jsx');


var AddRecipeModal = React.createClass({
  getInitialState() {
    return this.state = {
      open: false,
    };
  },
  handleOpen() {
    this.setState({ open: true });
  },

  handleClose(e) {
    this.props.onClose();
    this.setState({ open: false });
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
        onClick={this.handleClose}
      />,
    ];
    const AddRecipeForm = () => (
      <div>
        <TextField hintText="Recipe Name" floatingLabelText="Recipe Name" />
        <Divider />
        <TextField hintText="Ingredients" floatingLabelText="Ingredients" />
        <Divider />
      </div>
    );
    return (
      <div>
        <Button onClick={this.handleOpen} />
        <Dialog
          title="Add Recipes!"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <AddRecipeForm />
        </Dialog>
      </div>
    );
  }
});

module.exports = AddRecipeModal;