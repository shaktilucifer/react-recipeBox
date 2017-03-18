import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var Button = React.createClass({
  render() {
    return (
      <FloatingActionButton mini={true} onClick={this.props.onClick}>
        <ContentAdd />
      </FloatingActionButton>
      
      )
  }

});

module.exports = Button;


