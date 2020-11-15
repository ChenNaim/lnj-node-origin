import React from "react";
import Cover from "../images/healthyfood.jpg";

function Home() {
  return (
    <div className="recipes-search container-fluid">
        <div className="jumbotron text-center" style={{ color: "white", fontWeight: "900", textShadow: "3px 3px #ff0000", height: "300px", backgroundImage: `url(${Cover})`}}>
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
                <input className="form-control mr-sm-2 col-md-6" type="search" placeholder="Search Recipes" aria-label="Search"/>
              </div>
              <div className="row">
                <input className="form-control mr-sm-2 col-md-6" type="search" placeholder="Search by Ingredients" aria-label="Search"/>
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
          </div>  
  );
}

export default Home;