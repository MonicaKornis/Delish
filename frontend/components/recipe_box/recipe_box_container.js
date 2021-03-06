import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, likeRecipe, unlikeRecipe, removeErrors } from '../../actions/recipe_actions';
import RecipeIndex from '../main_page/recipe_index';

const mapStateToProps = (state) => {
  let likedRecipeIds = state.session.currentUser.likedRecipeIds;
  let currentUserId = state.session.currentUser.id;
  let authoredRecipes = Object.values(state.entities.recipes).filter((recipe) => recipe.authorId === currentUserId);

  const recipes = [];

  likedRecipeIds.forEach( (id) => {
    if(state.entities.recipes[id]) {
      recipes.push(state.entities.recipes[id]);
   }
 });

 

  return {
    recipes: recipes,
    likedRecipes: state.session.currentUser.likedRecipeIds,
    authoredRecipeIds: state.session.currentUser.authoredRecipeIds,
    authoredRecipes: authoredRecipes,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    likeRecipe: id => dispatch(likeRecipe(id)),
    unlikeRecipe: id => dispatch(unlikeRecipe(id)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeIndex);
