import React from 'react';
import {render} from 'react-dom';
let RecipeName = require('./RecipeName.jsx');
let Ingredients = require('./Ingredients.jsx');
let recipeJson ={
  recipes:[{
    recipeName: "Olio Aglio",
    ingredients:["Pasta","Oil","Garlic"]
  },
  {
    recipeName: "Bread",
    ingredients:["Flour","Yeast","Salt","Sugar"]
  },
 {
    recipeName: "Pesto",
    ingredients:["Basil","Pine Nuts","Garlic"]
  }]
};
 const recipeList = recipeJson.recipes.map((recipename) =>
    <div>
      <RecipeName recipeName={recipename.recipeName} key={recipename.recipeName}/ >
        <Ingredients ingredients={recipename.ingredients} key={recipename.ingredients[1]}/>
        </div>
  );
class App extends React.Component {
 
  render () {
    
    return( 
    <div>
       {recipeList}
          </div> 

     );
  }
}


render(<App />, document.getElementById('app'));
