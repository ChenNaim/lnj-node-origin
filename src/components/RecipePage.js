import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function RcipePage() {
        const {label} = useParams();
        const history = useHistory();
      
        const recipes = JSON.parse(localStorage.getItem('recipes')); 
        const recipe = recipes.find((recipe) => recipe.label === label);
        
        const goToHomepage = () => {
            history.push("/");
        }
      
        const goToAboutPage = () => {
            history.push("/all-recipes");
        }
        
        return (
          <div className="mt-5"> 
             <button onClick={goToHomepage}>Go to Home page</button>
            <button onClick={goToAboutPage}>Go to All Recipes</button>
            <h1 >{recipe.label}</h1>
           
          </div>

      
    // return (
    //     <div className="container-fluid">
    //         <div className="card mb-3" style={{maxWidth: "540px"}}>
    //             <div className="row no-gutters">
    //                 <div className="col-md-4">
    //                     <img src={recipe.image} className="card-img" alt={recipe.label}/>
    //                 </div>
    //                 <div className="col-md-8">
    //                     <div className="card-body">
    //                         <h5 className="card-title">{recipe.label}</h5>
    //                         <p className="card-text">Source: {recipe.source}</p>
    //                         <p className="card-text"><small className="text-muted">Prep time: {recipe.totalTime}</small></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="card" style={{width: "18rem"}}>
    //             <h4 className="card-title text-center">Ingredients</h4>                    
    //                 <ul className="list-group">
    //                     {
    //                         recipe.ingredientLines.map(ingredient => <li className="list-group-item">{ingredient}</li>)
    //                     }
    //                 </ul>
    //         </div>
    //         <div className="card" style={{width: "18rem"}}>
    //             <div className="card-header">
    //                 Directions
    //             </div>
    //             <ul className="list-group list-group-flush">
    //                 <li className="list-group-item">Cras justo odio</li>
    //                 <li className="list-group-item">Dapibus ac facilisis in</li>
    //                 <li className="list-group-item">Vestibulum at eros</li>
    //             </ul>
    //         </div>
    //     </div>
    );
}

export default RcipePage;