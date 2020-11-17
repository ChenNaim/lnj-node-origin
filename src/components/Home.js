import React, {useState, useEffect} from 'react';

import {getRecipes} from '../api/jsonPlaceholder';
import RecipeCard from './RecipeCard';
import Cover from "../images/healthyfood.jpg";
import Loader from "../images/loader.gif";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setselectedRecipe] = useState(null);
  const [recipeQuery, setRecipeQuery] = useState('');

  // useEffect(async (recipeQuery) => {
  //     let jsonrecipes;
  //     if(!localStorage.getItem('recipes')){
  //         jsonrecipes = await getRecipes(recipeQuery);
  //         jsonrecipes = jsonrecipes.hits;
  //         localStorage.setItem('recipes', JSON.stringify(jsonrecipes));
  //     }else{
  //         jsonrecipes = JSON.parse(localStorage.getItem('recipes'));
  //     }
  //     // setTimeout(() => {
  //     setRecipes(jsonrecipes);
  //     // }, 3000);
  // },[]);

  const onInputChange = async (e) => {
    console.log(e.target.value);
    setRecipeQuery(e.target.value);
    console.log(recipeQuery);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    let jsonrecipes;
      if(!localStorage.getItem('recipes')){
          jsonrecipes = await getRecipes('chicken');
          jsonrecipes = jsonrecipes.hits;
          localStorage.setItem('recipes', JSON.stringify(jsonrecipes));
      }else{
          jsonrecipes = JSON.parse(localStorage.getItem('recipes'));
      }
      // setTimeout(() => {
      setRecipes(jsonrecipes);
  }

  const onSelectRecipe = recipeUri => {
      const recipe = recipes.find(recipe => recipe.uri === recipeUri);
      setselectedRecipe(recipe);
  }
  return (
    <div className="recipes-search container-fluid">
        <div className="jumbotron text-center" style={{ fontFamily: "fantasy", color: "#e64e40", fontWeight: "900", textShadow: "2px 2px black", height: "300px", backgroundImage: `url(${Cover})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="container">
            <h1 className="display-4 pt-5">Welcome to 'My Recipes Book'</h1>
          </div>
        </div>     
      <div className="m-5">
          <div className="row">
              <h4 className="col-md-3">Search A Recipe</h4>
              <div className="form-check col-md-2">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label radio-inline mr-3" for="exampleRadios1">Most popular</label>
              </div>
              <div className="form-check text col-md-2">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                <label className="form-check-label radio-inline mr-3" for="exampleRadios2">Newest</label>
              </div>
          </div>
          <div className="row mb-3">
            <input className="form-control mr-sm-2 col-md-6" type="search" placeholder="Search Recipes" aria-label="Search" id="searchRecipes" name="recipeQuery" onBlur={onInputChange}/>
            <button class="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={onSubmit}>Search</button>
          </div>
          <div className="row">
                <input className="form-control mr-sm-2 col-md-6" type="search" placeholder="Search by Ingredients" aria-label="Search" id="searchByIngredients"/>
                <div className="form-check col-md-1">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label radio-inline mr-3" for="exampleRadios3">All</label>
                </div>
                <div className="form-check text col-md-2">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                  <label className="form-check-label radio-inline mr-3" for="exampleRadios4">At least one</label>
                </div>
          </div>
        </div> 
           <div className="row">
               <div className="col-md-4">
               <ul className="list-group">
                   {/* <li className="list-group-item active">Recipes</li>
                   {
                       recipes.length && recipes.map(({recipe}) => <li key={recipe.uri} 
                                             onClick={() => 
                                             onSelectRecipe(recipe.uri)} className="list-group-item">{recipe.label}</li>)
                   } */}
               </ul>
               {
                   !recipes.length && <img src={Loader} />
               }
               </div>
               <div className="col-md-8">
                   <div className="row">
                       <div className="col-md-4">
                           <RecipeCard recipe={selectedRecipe} />
                       </div>
                       <div className="col-md-4">
   
                       </div>
                   </div>
               </div>
           </div>

      </div>          
  );
}

export default Home;