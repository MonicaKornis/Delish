import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, likeRecipe, unlikeRecipe } from '../../actions/recipe_actions';
import RecipeBox from './recipe_box';


const mapStateToProps = (state) => {
  const recipes = Object.values(state.entities.recipes);
  const authoredRecipes = [];



  return {
    recipes: recipes,
    likedRecipes: [],
    authoredRecipeIds: [],
    authoredRecipes: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
    likeRecipe: id => dispatch(likeRecipe(id)),
    unlikeRecipe: id => dispatch(unlikeRecipe(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeBox);
