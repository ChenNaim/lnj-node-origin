import React from 'react';

function RecipeCard(props) {
    return (
        props.recipe && 
        <div class="container-fluid m-5">
        <div class="card" style={{width: "18rem"}}>
            <img src={props.recipe.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.recipe.lable}</h5>
                <p class="card-text">Source: {props.recipe.source}</p>
                <p class="card-text">Prep Time: {props.recipe.totalTime}</p>
                <a href="#" class="btn btn-primary">More...</a>
            </div>
        </div>
   </div>  
      );
    }
          

  

export default RecipeCard;