import * as RatingsApiUtil from '../util/rating_util';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const REMOVE_RATING = 'REMOVE_RATING';
export const RECEIVE_RATING_ERRORS = 'RECEIVE_RATING_ERRORS';

const receiveRating = (payload) => {
  return{
    type: RECEIVE_RATING,
    payload
  };
};

const removeRating = (payload) => {
  return {
    type: REMOVE_RATING,
    payload
  };
};

const recieveRatingErrors = (errors) => {
  return {
    type: RECEIVE_RATING_ERRORS,
    errors
  };
};

export const createRating = (rating) => (dispatch) => {
  return RatingsApiUtil.createRating(rating).then((rating) => {
    return dispatch(receiveRating(rating));
  }, errors => {
    return dispatch(recieveRatingErrors(errors.responseJSON));
  }
);
};

export const updateRating = (rating) =>  (dispatch) => {
  return RatingsApiUtil.updateRating(rating).then((rating) => {
    return dispatch(receiveRating(rating));
  }, errors => {
    return dispatch(recieveRatingErrors(errors.responseJSON));
    }
  );
};

export const deleteRating = (ratingId) => (dispatch) => {
  return RatingsApiUtil.deleteRating(ratingId).then((ratingId) => {
    return dispatch(removeRating(ratingId));
  }, errors => {
    return dispatch(recieveRatingErrors(errors.responseJSON));
    }
  );
};
