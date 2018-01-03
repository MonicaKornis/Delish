import React from 'react';
import GreetingContainer from './components/session/greeting_container';
import SessionFormContainer from './components/session/session_form_container';
import {
  Route,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
    <h1> Welcome to Delish! </h1>
    <GreetingContainer />
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
