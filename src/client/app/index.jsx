import React from 'react';
import {render} from 'react-dom';
let RecipeName = require('./RecipeName.jsx');
let Ingredients = require('./Ingredients.jsx');
// import RecipeName from 'RecipeName';
let recipeJson ={
  recipes:[{
    recipeName: "Olio Aglio",
    ingredients:["Pasta","Oil","Garlic"],
    id:1
  },
  {
    recipeName: "Bread",
    ingredients:["Flour","Yeast","Salt","Sugar"],
    id:2
  },
 {
    recipeName: "Pesto",
    ingredients:["Basil","Pine Nuts","Garlic"],
    id:3
  }]
};
 const recipeList = recipeJson.recipes.map((recipename) =>
    <div>
      <RecipeName recipeName={recipename.recipeName} key={recipename.recipeName}/>
        <Ingredients ingredients={recipename.ingredients} key={recipename.id}/>
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
