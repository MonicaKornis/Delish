import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store.js';
import * as RecipeApiUtil from './util/recipe_util';
import { fetchRecipes, fetchRecipe, createRecipe, updateRecipe, likeRecipe, unlikeRecipe } from './actions/recipe_actions';

window.fetchRecipes = fetchRecipes;
window.fetchRecipe = fetchRecipe;
window.createRecipe = createRecipe;
window.updateRecipe = updateRecipe;
window.likeRecipe = likeRecipe;
window.unlikeRecipe = unlikeRecipe;


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // : take off window
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
