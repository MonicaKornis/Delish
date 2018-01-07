import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchRecipes } from '../../actions/recipe_actions';
import RecipeIndex from './recipe_index';

const mapStateToProps = (state) => {

  return {
    recipes: Object.values(state.entities.recipes)
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecipeIndex));
