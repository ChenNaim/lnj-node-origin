import React, {useState, useEffect} from 'react';

import {getRecipes} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';

import Cover from "../images/healthyfood.jpg";
import Loader from "../images/loader.gif";

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
      // setTimeout(() => {
      setRecipes(jsonrecipes);
      // }, 3000);
  },[]);


  if(!recipes.length){
    return 'Loading Recipes, Please Wait...'
  }

  return (    
        <div>
          <div class="alert alert-info" role="alert">
            All recipes
          </div>
          <div className="row m-2">
              {
                  recipes.map(recipe => (
                    <RecipeCard {...recipe} />                    
                  ))
              }
          </div>
        </div>
  );
}

export default AllRecipes;