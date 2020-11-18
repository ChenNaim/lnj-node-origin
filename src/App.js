import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation, Footer, Home, AllRecipes, SavedRecipes, SignUp, Login, RecipeCard, RecipePage } from './components';

function App() {
  return (
    <Router>
      <div className="main">
          <Navigation />
          <Switch >
            <Route path="/"  exact={true}><Home /></Route>
            <Route path="/all-recipes"><AllRecipes /></Route>
            <Route path="/recipecard"><RecipeCard /></Route>
            <Route path="/recipepage/:label"><RecipePage /></Route>
            <Route path="/savedrecipes"><SavedRecipes /></Route>
            <Route path="/signup"><SignUp /></Route>
            <Route path="/login"><Login /></Route>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;