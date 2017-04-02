import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

import ContentAdd from 'material-ui/svg-icons/content/add';
const style = {
    textAlign: 'left',  
};
var Button = React.createClass({
  render() {
    return (
      <FloatingActionButton style={style} mini={true} onClick={this.props.onClick}>
            <ContentAdd />
       </FloatingActionButton> 
    )
  }

});

module.exports = Button;


