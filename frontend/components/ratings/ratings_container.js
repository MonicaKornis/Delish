import { createRating, updateRating, deleteRating } from '../../actions/rating_actions';
import {connect} from 'react-redux';
import RatingsIndex from './ratings_index';
import React from 'react';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  let currentRecipe = state.entities.recipies[ownProps.match.params.id];
  let currentRecipeRatings = currentRecipe.ratings;
  return {
    currentRecipe: currentRecipe,
    currentRecipeRatings: currentRecipeRatings
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
    createRating: (rating) => dispatch(createRating(rating)),
    updateRating: (rating) => dispatch(updateRating(rating))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RatingsIndex));
