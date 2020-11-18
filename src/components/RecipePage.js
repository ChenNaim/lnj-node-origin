import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function RcipePage() {
    const {label} = useParams();
    const history = useHistory();

    const recipes = JSON.parse(localStorage.getItem('recipes')); 
    const recipe = recipes.find(element => element.recipe.label === label).recipe;
    
    const goToHomepage = () => {
        history.push("/");
    }
    
    const goToSavedRecipes = () => {
        history.push("/savedrecipes");
    }

    const saveRecipe = async () => {
      let jsonrecipes = JSON.parse(localStorage.getItem('savedRecipes'));
      if(jsonrecipes) {
        jsonrecipes.push({'recipe':recipe});
        localStorage.setItem('savedRecipes', JSON.stringify(jsonrecipes));
      } else {
        let newSavedRecipes = [{'recipe':recipe}];
        localStorage.setItem('savedRecipes', JSON.stringify(newSavedRecipes));
      }
    }
    return (
      <div className="container-fluid mt-5">  
        <div style={{height: "25px"}}></div>
        <div className="row">
        <div className="col-md-1"></div>  
        <div className="col-md-10"> 
        <div className="card mb-3" style={{maxWidth: "1200px"}}>
          <div className="row no-gutters">
              <div className="col-md-4">
                <img src={recipe.image} className="card-img" alt={recipe.label}/>
              </div>
            <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-info">{recipe.label}</h5>
                  <p className="card-text">Source: {recipe.source}</p>
                  <p className="card-text">Prep time: {recipe.totalTime} minutes</p>
                  <p className="card-text">Servings: {recipe.yield}</p>
                  <p className="card-text">Calories per serving: {Math.floor(recipe.calories/recipe.yield)}</p>
                </div>
            </div>
          </div> 
        </div>
        <div className="accordion" id="accordionExample" style={{maxWidth: "1200px"}}>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn text-info btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Ingredients
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="list-group">
                  {
                    recipe.ingredientLines.map(ingredient => <li className="list-group-item">{ingredient}</li>)
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn text-info btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Diet Labels
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                  {
                    recipe.dietLabels.map(ingredient => <li className="list-group-item">{ingredient}</li>)
                  }
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn text-info btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Health Labels
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                <ul className="list-group">
                          {
                              recipe.healthLabels.map(ingredient => <li className="list-group-item">{ingredient}</li>)
                          }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-light text-center" role="alert" style={{maxWidth: "1200px"}}>
          <a href={recipe.url} target="_blank" rel="noreferrer" className="btn btn-lg m-2 btn-outline-info">See full recipe</a>
          <button type="button" className="btn btn-lg m-2 btn-outline-info" onClick={saveRecipe}>Save Recipe</button>
          <button type="button" className="btn btn-lg m-2 btn-outline-info" onClick={goToSavedRecipes}>Go Saved Recipes</button>
          <button type="button" className="btn btn-lg m-2 btn-outline-info" onClick={goToHomepage}>Go to Home page</button>
        </div>
        <div style={{height: "25px"}}></div>                    
        </div> 
        <div className="col-md-1"></div>  
        </div>
      </div>             
    );
}
export default RcipePage;