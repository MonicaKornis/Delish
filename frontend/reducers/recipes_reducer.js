import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, RECEIVE_RECIPE_ERRORS } from '../actions/recipe_actions';

const recipesReducer = (oldState={}, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      debugger
      return Object.assign(newState,oldState,{1: action.recipe});
    default:
      return oldState;
  }
};

export default recipesReducer;
