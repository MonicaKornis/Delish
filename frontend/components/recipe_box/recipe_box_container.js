import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, likeRecipe, unlikeRecipe } from '../../actions/recipe_actions';
import RecipeBox from './recipe_box';
import RecipeIndex from '../main_page/recipe_index';

const mapStateToProps = (state) => {
  let likedRecipeIds = state.session.currentUser.likedRecipeIds;
  const recipes = [];

  likedRecipeIds.forEach( (id) => {
    if(state.entities.recipes[id]) {
      recipes.push(state.entities.recipes[id]);
   }
 });

  return {
    recipes: recipes,
    likedRecipes: state.session.currentUser.likedRecipeIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    likeRecipe: id => dispatch(likeRecipe(id)),
    unlikeRecipe: id => dispatch(unlikeRecipe(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeIndex);
