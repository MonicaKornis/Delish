import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeIndex);
