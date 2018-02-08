import { RECEIVE_RATING, REMOVE_RATING } from '../actions/rating_actions';
import { createRating, updateRating, deleteRating } from '../actions/rating-actions';

const ratingsReducer = (oldState={}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_RATING:
      newState = Object.assign(newState,oldState,{[action.payload.id]: action.payload});
      return newState;
    case REMOVE_RATING:
      newState = Object.assign(newState,oldState);
      delete newState[action.payload.id];
      return newState;
    default:
      return oldState;
  }
};

export default ratingsReducer; 
