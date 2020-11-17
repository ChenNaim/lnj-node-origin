import React, {useState, useEffect} from 'react';

import {getRecipes} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';
import Cover from "../images/healthyfood.jpg";

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


  return (
    <div className="container-fluid">
     <div className="jumbotron text-center" style={{ fontFamily: "fantasy", color: "#e64e40", fontWeight: "900", textShadow: "2px 2px black", height: "300px", backgroundImage: `url(${Cover})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="container">
            <h1 className="display-4 pt-5">All Recipes</h1>
          </div>
        </div>  
      <div className="container-fluid">
        <ul>
         <li className="list-group-item active">Recipes</li>
                   {
                       recipes.length && recipes.map(({recipe}) => <li key={recipe.uri} 
                                              className="list-group-item">{recipe.label}</li>)
                   }
               </ul>     
      </div>
        {
          !recipes.length && <img src="../imag />
        }
    </div>  
  );
}

export default AllRecipes;