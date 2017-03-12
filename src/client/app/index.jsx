import React from 'react';
import {render} from 'react-dom';
var RecipeName = require('./RecipeName.jsx');
// import RecipeName from 'RecipeName';

class App extends React.Component {
  render () {
    return <RecipeName />;
  }
}


render(<App />, document.getElementById('app'));
