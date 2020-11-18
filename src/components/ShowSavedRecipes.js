import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';

function ShowSavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    let jsonrecipes = JSON.parse(localStorage.getItem('savedRecipes'));
    if(jsonrecipes) {
      setSavedRecipes(jsonrecipes);
    }
  },[]);   

  if(!savedRecipes.length){
    return 'Loading Saved Recipes, Please Wait...'
  }

  return (    
    <div>
      <div className="alert alert-info" role="alert">
        My Saved Recipes 
      </div>
      <div className="row m-2">
          {
            savedRecipes.map(recipe => (
              <RecipeCard {...recipe} />                    
            ))
          }
      </div>
      <div style={{height: "35px"}}></div>
    </div>
  );
}

export default ShowSavedRecipes;