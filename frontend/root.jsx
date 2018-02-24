import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Router } from 'react-router-dom';
import App from './App';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
