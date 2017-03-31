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

        </div>
      </li>
    )
  }
});

export default AppBarExampleIcon;