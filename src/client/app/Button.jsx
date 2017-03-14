import React from 'react';

var Button = React.createClass({
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.name}</button>
    );
  }

});

module.exports = Button;


