import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
    return (
        props.recipe && 
        <div className="col-md-4 col-sm-6 col-lg-3">
            <div class="card">
                <img src={props.recipe.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.recipe.label}</h5>
                    <p class="card-text">Source: {props.recipe.source}</p>
                    <p class="card-text">Prep Time: {props.recipe.totalTime}</p>
                    <p class="card-text">Servings: {props.recipe.yield}</p>
                    <p class="card-text">Calories: {props.recipe.calories}</p>
                    <Link class="btn btn-info btn-block" to={`/recipepage/${props.recipe.label}`}>More Details</Link>
                </div>
            </div>
        </div>  
      );
    }

export default RecipeCard;