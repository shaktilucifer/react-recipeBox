import React from 'react';

var Ingredients = React.createClass({

    render() {
        var showHideIngredients = this.props.showIngredient ? "" : "hide";
        return (
            <div style={{ padding: 20 }} className={showHideIngredients} >
                {this.props.ingredients.map(function (title) {
                    return <li key={title}>{title}</li>;
                })}
            </div>
        );
    }

});

module.exports = Ingredients;


