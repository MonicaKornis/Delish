import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRecipes } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => {
  let recipesObj = Object.assign({},state.entities.recipes);
  let keys = Object.keys(state.entities.recipes);
  for (let i = 0; i < keys.length; i++) {
    let number = keys[i];
    recipesObj[number].id = number;
  }


  return {
    recipes: Object.values(recipesObj)
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecipeIndex));
