import React from 'react';
import ReactDOM from 'react-dom';

var Ingredients = React.createClass({
    
    // createList(){
    //      s = {this.props.Ingredients};
    // },
    render(){
        return (
        <div className="hide">
        {this.props.ingredients.map(function(title) {
            return <li key={title}>{title}</li>;
          })}            
        </div>);
    }

});

module.exports = Ingredients;


