import React, {useState, useEffect} from 'react';

import {getRecipes} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
      let jsonrecipes;
      if(!localStorage.getItem('recipes')){
          jsonrecipes = await getRecipes();
          jsonrecipes = jsonrecipes.hits;
          localStorage.setItem('recipes', JSON.stringify(jsonrecipes));
      }else{
          jsonrecipes = JSON.parse(localStorage.getItem('recipes'));
      }
      setRecipes(jsonrecipes);
  },[]);

  if(!recipes.length){
    return 'Loading Recipes, Please Wait...'
  }

  return (    
        <div>
          <div className="alert alert-info" role="alert">
            All recipes
          </div>
          <div className="row m-2">
              {
                  recipes.map(recipe => (
                    <RecipeCard {...recipe} />                    
                  ))
              }
          </div>
          <div style={{height: "35px"}}></div>
        </div>
  );
}

export default AllRecipes;