import React from 'react';
var Button = React.createClass({
  createRecipe(e) {
  
  },
  render() {
    return (
      <span>

        <a onClick={this.createRecipe} className="btn-floating btn-large waves-effect waves-light modal-trigger add" href="#newRecipe"><i className="material-icons">add</i></a>

        <div id="newRecipe" className="modal">
          <div className="modal-content">
            <h4>Add New Recipe</h4>
            <div className="input-field">
              <input id="add_name" type="text" className="validate" />
              <label htmlFor="add_name">Name</label>
            </div>
            <div className="input-field">
              <input id="add_ingredients" type="text" className="validate" />
              <label htmlFor="add_ingredients">Ingredients</label>
            </div>
            <div className="input-field">
              <input id="add_photo" type="text" className="validate" />
              <label htmlFor="add_photo">Photo</label>
            </div>
          </div>
          <div className="modal-footer">
            <a onClick={this.addRecipe} href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>

      </span>
    );
  }

});

module.exports = Button;


