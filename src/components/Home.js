import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {getRecipes, getRecipesByDiet} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';
import Cover from '../images/healthyfood.jpg';
import Loader from '../images/loader.gif';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipeQuery, setRecipeQuery] = useState('');

  const onInputChange = async (e) => {
    setRecipeQuery(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let jsonrecipes;
    jsonrecipes = await getRecipes(recipeQuery);
    jsonrecipes = jsonrecipes.hits;
    setRecipes(jsonrecipes);
    console.log(jsonrecipes);
  }

  const onSubmitDiet = async (e) => {
    e.preventDefault();
    let jsonrecipes;
    jsonrecipes = await getRecipesByDiet(e.target.innerText);
    jsonrecipes = jsonrecipes.hits;
    setRecipes(jsonrecipes);
    console.log(jsonrecipes);
  }

  return (
    <div className="recipes-search container-fluid">
        <div className="jumbotron text-center" style={{ fontFamily: "fantasy", color: "#e64e40", fontWeight: "900", textShadow: "2px 2px black", height: "300px", backgroundImage: `url(${Cover})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="container">
            <h1 className="display-4 pt-5">Welcome to 'My Recipes Book'</h1>
          </div>
        </div>     
        <div className="m-5">
            <label className="row" for="recipeQuery"><h4>Search A Recipe</h4></label>
            <div className="row">
            <input className="form-control mr-sm-2 col-md-4" type="search" placeholder="Search by keyword" aria-label="Search" id="searchRecipes" name="recipeQuery" onChange={onInputChange}/>
            <button class="btn btn-outline-info my-2 my-sm-0" type="serch" onClick={onSubmit}>Search</button>
          </div>
          <div className="row mt-3">
            <div class="dropdown">
                <button class="btn btn-info btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Diet 
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>balanced</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>high-protein</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>high-fiber</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>low-fat</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>low-carb</button>
                  <button class="dropdown-item" type="button" onClick={onSubmitDiet}>low-sodium</button>
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
          <div class="alert alert-info text-center" role="alert">
            What would you like to eat?
          </div>
      </div>          
  );
}

export default Home;