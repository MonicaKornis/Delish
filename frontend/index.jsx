import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store.js';

window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
window.signup = SessionApiUtil.signup;


document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to Delish!</h1>,root);
});
