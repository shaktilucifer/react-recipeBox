import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

var AddRecipeModal = React.createClass({
    getInitialState(){
return this.state = {
    open: false,
  };
    },
     handleOpen() {
    this.setState({open: true});
  },

  handleClose(){
    this.setState({open: false});
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
        <Dialog
          title="Dialog With Actions"
          modal={false}
          actions={actions}
          open={isModalOpen}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
});

module.exports = AddRecipeModal;