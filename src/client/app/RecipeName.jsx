import React from 'react';
import ReactDOM from 'react-dom';

var RecipeName = React.createClass({

    render() {
        return (
            <div onClick={this.props.onClick}>
                {this.props.recipeName}
            </div>);
    }

});

module.exports = RecipeName;