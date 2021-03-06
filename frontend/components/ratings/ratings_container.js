import { createRating, updateRating, deleteRating } from '../../actions/rating_actions';
import { fetchRecipes } from '../../actions/recipe_actions';
import {connect} from 'react-redux';
import RatingsIndex from './ratings_index';
import React from 'react';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  let currentRecipe = state.entities.recipes[ownProps.match.params.recipeId];
  let currentRecipeRatings = currentRecipe.ratings;
  let currentRating = currentRecipeRatings.length === 0 ? [] : currentRecipeRatings.filter((rating) =>
                        rating.user_id === state.session.currentUser.id);

  let currentRatingNum = currentRating.length !== 0 ? currentRating[0].rating : 0 ;
  let averageRating = 0;
  if(currentRecipeRatings.length >= 1) {
  for (let i = 0; i < currentRecipeRatings.length; i++) {
     averageRating += currentRecipeRatings[i].rating;
  }

  averageRating = Math.ceil(averageRating/currentRecipeRatings.length);
}


  return {
    currentRecipe: currentRecipe,
    currentRatingNum: currentRatingNum,
    currentRating: currentRating,
    currentRecipeRatings: currentRecipeRatings,
    averageRating: averageRating,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
    createRating: (rating) => dispatch(createRating(rating)),
    updateRating: (rating) => dispatch(updateRating(rating)),
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RatingsIndex));
