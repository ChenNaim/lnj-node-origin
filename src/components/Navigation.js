import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{fontFamily: "fantasy", color: "#e64e40"}}>
            My Recipes Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-right" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/">
                  Home
                    <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/all-recipes" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/all-recipes">
                  All Recipes
                  </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/savedrecipes" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/savedrecipes">
                  Saved Recipes
                  </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/recipecard" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/recipecard">
                  Recipe Card
                  </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/signup" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);