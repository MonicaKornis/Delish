import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store.js';
import * as RecipeApiUtil from './util/recipe_util';
import { fetchRecipes, fetchRecipe, createRecipe, updateRecipe, likeRecipe, unlikeRecipe } from './actions/recipe_actions';
import { createComment, updateComment, deleteComment, likeComment, unlikeComment } from './actions/comment_actions';
import { createRating, updateRating, deleteRating } from './actions/rating_actions';
import * as RatingApiUtil from './util/rating_util';
let Modal = require('react-modal');


window.fetchRecipes = fetchRecipes;
window.fetchRecipe = fetchRecipe;
window.createRating = createRating;
window.updateRating = updateRating;
window.deleteRating = deleteRating;

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
  Modal.setAppElement(document.root);
  ReactDOM.render(<Root store={store}/>, root);
});
