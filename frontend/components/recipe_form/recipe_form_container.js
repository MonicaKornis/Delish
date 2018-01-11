import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import { createRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeForm);
