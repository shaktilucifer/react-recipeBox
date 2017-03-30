import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

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
                    <div style={{ float: 'right' }}>
                        <FontIcon 
                        className="material-icons" 
                        color={greenA200} onClick={() => { this.props.onEdit(this.props.recipeName) }} 
                        tooltip="Edit Recipe">
                        edit
                        </FontIcon>
                        <FontIcon 
                        className="material-icons" 
                        color={red500} 
                        onClick={() => { this.props.onClick(this.props.recipeName) 
                        tooltip="Delete Recipe"}}>
                        delete
                        </FontIcon>
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