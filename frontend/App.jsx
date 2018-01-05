import React from 'react';
import GreetingContainer from './components/session/greeting_container';
import { AuthRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';
import RecipeIndexContainer from './components/main_page/recipe_index_container';
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
    <Route exact path="/" component={GreetingContainer} />
    <Route path="/" component={RecipeIndexContainer} />
  </div>
);

export default App;
