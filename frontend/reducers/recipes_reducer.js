import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, RECEIVE_RECIPE_ERRORS, REMOVE_RECIPE } from '../actions/recipe_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_RATING, REMOVE_RATING } from '../actions/rating_actions';
import merge from 'lodash/merge';

const recipesReducer = (oldState={}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      return Object.assign(newState,oldState,{[action.recipe.id]: action.recipe});
    case RECEIVE_COMMENT:
      let state = merge({},oldState);
      state[action.payload.recipe_id].commentIds.push(action.payload.id);
      return state;
    case RECEIVE_RATING:
      newState = merge({},oldState);
      newState[action.payload.recipe_id].ratings.push(action.payload);
    case REMOVE_RATING:
    newState = merge({},oldState);
    newState[action.payload.recipe_id].ratings = newState[action.payload.recipe_id].ratings.filter((rating) => rating.id !== action.payload.id);
    return newState;
    case REMOVE_RECIPE:
      state = merge({},oldState);
      delete state[action.payload.id];
      return state;
    default:
      return oldState;
  }
};

export default recipesReducer;
