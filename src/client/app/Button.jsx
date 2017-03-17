import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var Button = React.createClass({
  createRecipe(e) {

  },
  render() {
    return (
      <FloatingActionButton mini={true}>
        <ContentAdd />
      </FloatingActionButton>
      
      )
  }

});

module.exports = Button;


