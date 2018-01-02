import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

// window.login = SessionApiUtil.login;
// window.logout = SessionApiUtil.logout;
// window.signup = SessionApiUtil.signup;


document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>,root);
});
