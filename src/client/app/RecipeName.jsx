import React from 'react';
import ReactDOM from 'react-dom';

var RecipeName = React.createClass({
    render(){
        return (
        <div>
        {this.props.recipeName}
        </div>);
    }

});

module.exports = RecipeName;