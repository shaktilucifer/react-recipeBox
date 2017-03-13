import React from 'react';
import ReactDOM from 'react-dom';

var Ingredients = React.createClass({
    render(){
        return (
        <div>
        {this.props.ingredients}
        </div>);
    }

});

module.exports = Ingredients;


