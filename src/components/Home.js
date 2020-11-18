import React, {useState} from 'react';

import {getRecipes, getRecipesByDiet, getRecipesByHealth} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';
import Cover from '../images/healthyfood.jpg';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipeQuery, setRecipeQuery] = useState('');

  const onInputChange = async (e) => {
    setRecipeQuery(e.target.value.toLowerCase());
  }

  const prepareRecipes = async (jsonrecipesHits) => {
    localStorage.setItem('recipes', JSON.stringify(jsonrecipesHits));
    setRecipes(jsonrecipesHits);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    let jsonrecipes;
    jsonrecipes = await getRecipes(recipeQuery);
    prepareRecipes(jsonrecipes.hits);
  }

  const onSubmitDiet = async (e) => {
    e.preventDefault();
    let jsonrecipes;
    jsonrecipes = await getRecipesByDiet(e.target.innerText.toLowerCase());
    prepareRecipes(jsonrecipes.hits);
  }

  const onSubmitHealth = async (e) => {
    e.preventDefault();
    let jsonrecipes;
    jsonrecipes = await getRecipesByHealth(e.target.innerText.toLowerCase());
    prepareRecipes(jsonrecipes.hits);
  }

  return (
    <div className="recipes-search container-fluid">
        <div className="jumbotron text-center" style={{ fontFamily: "fantasy", color: "#e64e40", fontWeight: "900", textShadow: "2px 2px black", height: "300px", backgroundImage: `url(${Cover})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="container">
            <h1 className="display-4 pt-5">Welcome to 'My Recipes Book'</h1>
          </div>
        </div>     
        <div className="m-5">
            <label className="row" for="recipeQuery"><h4>Find Something to Cook</h4></label>
            <div className="row">
            <input className="form-control mr-sm-2 col-md-3" type="search" placeholder="Search by Keyword" aria-label="Search" id="searchRecipes" name="recipeQuery" onChange={onInputChange}/>
            <button class="btn btn-outline-info my-2 my-sm-0" type="serch" onClick={onSubmit}>Search</button>
          </div>
          <div className="row mt-3">
            <label className="text-muted col-md-3 mr-2 mt-2" for="recipeQuery"><h6>Search by Nutritional Values</h6></label>
            <div class="dropdown">
                <button class="btn btn-outline-info my-2 my-sm-0 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Diet 
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>Balanced</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>High-protein</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>Low-fat</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>Low-carb</button>
                </div>
              </div>

              <div class="dropdown ml-2">
                <button class="btn btn-outline-info my-2 my-sm-0 dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Health 
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Vegan</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Vegetarian</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Sugar-conscious</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Peanut-free</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Tree-nut-free</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitHealth}>Alcohol-free</button>
                </div>
              </div>             
            </div>
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

export default Home;