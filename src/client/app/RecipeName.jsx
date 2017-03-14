import React from 'react';

var RecipeName = React.createClass({
    render() {
        console.log(this.state.showHideIng);
        return (
        <div>
            <div onClick={this.onClick}>
                {this.props.recipeName}
            </div>
            <Ingredients
                showIngredient={this.state.showHideIng} />
        </div>
        );

    }

});

module.exports = RecipeName;