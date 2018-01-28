import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './recipe_form';
import { createRecipe, receiveRecipeErrors } from '../../actions/recipe_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe)),
    // removeErrors: () => dispatch(receiveRecipeErrors([]))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RecipeForm);
