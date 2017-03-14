import React from 'react';
import ReactDOM from 'react-dom';

var Ingredients = React.createClass({

    render(){
        var showHideIngredients = this.props.showIngredient ?"":"hide";
        console.log(showHideIngredients);
        return (
        <div className={showHideIngredients}>
        {this.props.ingredients.map(function(title) {
            return <li key={title}>{title}</li>;
          })}            
        </div>);
    }

});

module.exports = Ingredients;


