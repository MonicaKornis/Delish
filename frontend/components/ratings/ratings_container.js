import { createRating, updateRating, deleteRating } from '../../actions/rating_actions';
import {connect} from 'react-redux';
import RatingsIndex from './ratings_index';
import React from 'react';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  let currentRecipe = state.entities.recipes[ownProps.match.params.recipeId];
  let currentRecipeRatings = currentRecipe.ratings;
  let averageRating = 0;
  if(currentRecipeRatings.length > 1) {
  for (let i = 0; i < currentRecipeRatings.length; i++) {
     averageRating += currentRecipeRatings[i].rating;
  }
  averageRating = Math.ceil(averageRating/currentRecipeRatings.length);
}


  return {
    currentRecipe: currentRecipe,
    currentRecipeRatings: currentRecipeRatings,
    averageRating: averageRating,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
    createRating: (rating) => dispatch(createRating(rating)),
    updateRating: (rating) => dispatch(updateRating(rating))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RatingsIndex));
