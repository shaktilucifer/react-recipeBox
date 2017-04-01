import React from 'react';
import AppBar from 'material-ui/AppBar';
let Button = require('./Button.jsx');

var AppBarExampleIcon = React.createClass({
  render() {
    return (
      <li>
        <div
          style={{ backgroundColor: 'grey', color: 'white' }}
          className="collapsible-header">
          <b>  RECIPE BOOK </b>
            <Button onClick={this.props.onClick}/>
        </div>
      </li>
    )
  }
});

export default AppBarExampleIcon;