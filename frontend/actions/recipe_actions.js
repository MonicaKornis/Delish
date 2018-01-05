import * as RecipeApiUtil from '../util/recipe_util';
export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';

const receiveAllRecipes = (recipes) => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  };
};

const receiveRecipe = (recipe) => {
  return {
    type: RECEIVE_RECIPE,
    recipe
  };
};

const receiveRecipeErrors = (errors) => {
  return {
    type: RECEIVE_RECIPE_ERRORS,
    errors
  };
};


export const fetchRecipes = () => dispatch => {
  debugger
  return RecipeApiUtil.fetchRecipes().then(recipes => {
    return dispatch(receiveAllRecipes(recipes));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const fetchRecipe = (id) => dispatch => {
  return RecipeApiUtil.fetchRecipe(id).then(recipe => {
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const createRecipe = (recipe) => dispatch => {
  return RecipeApiUtil.createRecipe(recipe).then(recipe => {
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const updateRecipe = (recipe) => dispatch => {
  return RecipeApiUtil.updateRecipe(recipe).then(recipe => {
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};
