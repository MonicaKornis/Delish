import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, RECEIVE_RECIPE_ERRORS } from '../actions/recipe_actions';

const recipesReducer = (oldState={}, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return action.recipes;
    case RECEIVE_RECIPE:
      return Object.assign(newState,oldState,{[action.recipe.id]: action.recipe});
    default:
      return oldState;
  }
};

export default recipesReducer;
