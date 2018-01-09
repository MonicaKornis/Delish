import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRecipes, likeRecipe, unlikeRecipe } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state,ownProps) => {
  let likedRecipeIds = state.session.currentUser ? state.session.currentUser.likedRecipeIds : [];
  return {
    recipes: Object.values(state.entities.recipes),
    likedRecipes: likedRecipeIds,
  };

};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    likeRecipe: (recipeId) => dispatch(likeRecipe(recipeId)),
    unlikeRecipe: (recipeId) => dispatch(unlikeRecipe(recipeId))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecipeIndex));
