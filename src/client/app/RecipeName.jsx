import React from 'react';
let Ingredients = require('./Ingredients.jsx');

var RecipeName = React.createClass({
    getInitialState(){
        return {
            showIngredient: false
        }
    },
    showIngredients() {
        let showIng = this.state.showIngredient ? false : true;
        this.setState({
            showIngredient: showIng
        })
    },
    render() {
        return (
            <div>
                <div onClick={this.showIngredients}>
                    {this.props.recipeName}
                </div>
                <Ingredients
                    ingredients={this.props.ingredients}
                    showIngredient={this.state.showIngredient} />
            </div>
        );

    }

});

module.exports = RecipeName;