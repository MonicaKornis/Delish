import React from 'react';
import GreetingContainer from './components/session/greeting_container';
import { AuthRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';
import RecipeBoxContainer from './components/recipe_box/recipe_box_container';
import RecipeIndexContainer from './components/main_page/recipe_index_container';
import RecipeShowContainer from './components/recipe_show/recipe_show_container';
import RecipeFormContainer from './components/recipe_form/recipe_form_container';

import {
  Route,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Route path="/login" />
      <Route path="/signup" />
    </header>


    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/recipes/recipe-box" component={RecipeBoxContainer} />
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/recipes/:recipeId" component={GreetingContainer} />
    <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
    <Route exact path="/" component={RecipeIndexContainer} />
    <Route exact path="/login" component={RecipeIndexContainer} />
    <Route exact path="/signup" component={RecipeIndexContainer} />
    <Route exact path="/signup" component={GreetingContainer} />
    <Route exact path="/login" component={GreetingContainer} />

    <Route path="/recipes/recipe-box" component={RecipeFormContainer}/>
  </div>
);

export default App;
