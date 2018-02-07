import { RECEIVE_RECIPE_ERRORS, RECEIVE_RECIPE } from '../actions/recipe_actions';

const recipeErrorsReducer = (oldState=[],action) => {
  Object.freeze(oldState);
  // 
  switch (action.type) {
    case RECEIVE_RECIPE_ERRORS:
      return action.errors;
    case RECEIVE_RECIPE:
      return oldState;
    default:
      return oldState;
  }
};

export default recipeErrorsReducer;
