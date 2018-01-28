import * as RecipeApiUtil from '../util/recipe_util';
export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';
export const RECEIVE_RECIPE_LIKE = 'RECEIVE_RECIPE_LIKE';
export const RECEIVE_RECIPE_UNLIKE = 'RECEIVE_RECIPE_UNLIKE';

const receiveAllRecipes = (recipes) => {
  return {
    type: RECEIVE_ALL_RECIPES,
    recipes
  };
};

const receiveRecipe = ({recipe, comments}) => {
  return {
    type: RECEIVE_RECIPE,
    recipe,
    comments
  };
};

const receiveRecipeErrors = (errors) => {
// debugger
  return {
    type: RECEIVE_RECIPE_ERRORS,
    errors
  };
};

const recieveLike = (payload) => {
  return {
    type: RECEIVE_RECIPE_LIKE,
    payload
  };
};

const recieveUnlike= (payload) => {
  return {
    type: RECEIVE_RECIPE_UNLIKE,
    payload
  };
};

export const fetchRecipes = () => dispatch => {
  return RecipeApiUtil.fetchRecipes().then(recipes => {
    return dispatch(receiveAllRecipes(recipes));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const fetchRecipe = (id) => dispatch => {
  return RecipeApiUtil.fetchRecipe(id).then(payload => {
    return dispatch(receiveRecipe(payload));
  }, errors => {
    return dispatch(receiveRecipeErrors(errors.responseJSON));
  }
  );
};

export const createRecipe = (recipe) => dispatch => {
  return RecipeApiUtil.createRecipe(recipe).then(recipe => {
    debugger
    return dispatch(receiveRecipe(recipe));
  }, errors => {
    // debugger
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

export const likeRecipe = (recipeId) => dispatch => {
  return RecipeApiUtil.likeRecipe(recipeId).then( like => {
    return dispatch(recieveLike(like));
    }
  );
};

export const unlikeRecipe = (recipeId) => dispatch => {
  return RecipeApiUtil.unlikeRecipe(recipeId).then( unlike => {
    return dispatch(recieveUnlike(unlike));
    }
  );
};

export const removeErrors = () => dispatch => {
  return dispatch(receiveRecipeErrors([]));
};
