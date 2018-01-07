import React from 'react';
import GreetingContainer from './components/session/greeting_container';
import { AuthRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';
import RecipeIndexContainer from './components/main_page/recipe_index_container';
import RecipeShowContainer from './components/recipe_show/recipe_show_container';
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
    <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/recipes/:recipeId" component={GreetingContainer} />
    <Route exact path="/" component={RecipeIndexContainer} />
  </div>
);

export default App;
