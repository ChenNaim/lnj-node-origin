import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
    return (
        props.recipe && 
        <div className="col-md-4 col-sm-6 col-lg-3 mb-3">
            <div className="card">
                <img src={props.recipe.image} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.recipe.label}</h5>
                    <p className="card-text">Source: {props.recipe.source}</p>
                    <p classame="card-text">Prep Time: {props.recipe.totalTime} minutes</p>
                    <p className="card-text">Servings: {props.recipe.yield}</p>
                    <p className="card-text">Calories per serving: {Math.floor(props.recipe.calories)}</p>
                    <Link className="btn btn-info btn-block" to={`/recipepage/${props.recipe.label}`}>More Details</Link>
                </div>
            </div>
        </div>  
      );
    }

export default RecipeCard;