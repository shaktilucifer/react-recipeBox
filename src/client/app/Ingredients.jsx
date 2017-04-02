import React from 'react';

let Ingredients = React.createClass({

    render() {
        let showHideIngredients = this.props.showIngredient ? "" : "hide";
        return (
            <div style={{ padding: 20 }} className={showHideIngredients} >
            {
                this.props.ingredients.map(function (title) {
                return <li key={title}>{title}</li>;
            })}
            </div>
        );
    }

});

module.exports = Ingredients;


