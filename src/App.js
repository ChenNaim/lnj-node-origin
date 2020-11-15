import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, AllRecipes, SavedRecipes, SignUp, Login, RecipeCard, RecipePage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch >
          <Route path="/" exact component={() => <Home />} />
          <Route path="/all-recipes" exact component={() => <AllRecipes />} />
          <Route path="/recipecard" exact component={() => <RecipeCard />} />
          <Route path="/recipepage" exact component={() => <RecipePage />} />
          <Route path="/savedrecipes" exact component={() => <SavedRecipes />} />
          <Route path="/signup" exact component={() => <SignUp />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;