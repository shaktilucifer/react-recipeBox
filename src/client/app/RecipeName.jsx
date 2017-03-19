import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';

let Ingredients = require('./Ingredients.jsx');

var RecipeName = React.createClass({
    getInitialState() {
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
            <li>
                <div className="collapsible-header" onClick={this.showIngredients}>
                    <b> {this.props.recipeName} </b>
                    <div style={{ float: 'right'}}>
                        <FontIcon className="material-icons" onClick={this.props.onClick}>delete</FontIcon>
                    </div>
                </div>
                <Ingredients
                    ingredients={this.props.ingredients}
                    showIngredient={this.state.showIngredient} />
            </li>
        );

    }

});

module.exports = RecipeName;