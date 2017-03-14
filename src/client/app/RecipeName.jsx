import React from 'react';
import ReactDOM from 'react-dom';

var RecipeName = React.createClass({
    handleEvent(e) {
        console.log(e.target.val);
    },
    render() {
        return (
            <div onClick={this.handleEvent}>
                {this.props.recipeName}
            </div>);
    }

});

module.exports = RecipeName;