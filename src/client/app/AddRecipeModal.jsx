import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
let Button = require('./Button.jsx');

var AddRecipeModal = React.createClass({
    getInitialState(){
return this.state = {
    open: false,
  };
    },
  handleOpen() {
    console.log("here");
    this.setState({open: true});
  },

  handleClose(e){
    this.setState({open: false});
    this.props.onClose
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
    let isModalOpen = this.props.open;
    return (
      <div>
      <Button onClick={this.handleOpen}/>
        <Dialog
          title="Dialog With Actions"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
});

module.exports = AddRecipeModal;