import React from 'react';
import {Link} from 'react-router-dom';


function RecipeCard(props) {
    return (
        props.recipe && 
        <div className="col-md-4 col-sm-6 col-lg-3 m-2">
            <div class="card">
                <img src={props.recipe.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.recipe.lable}</h5>
                    <p class="card-text">Source: {props.recipe.source}</p>
                    <p class="card-text">Prep Time: {props.recipe.totalTime}</p>
                    <a href="#" class="btn btn-primary">More Details</a>
                </div>
            </div>
        </div>  
      );
    }
          

  

export default RecipeCard;