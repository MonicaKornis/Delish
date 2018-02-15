import { RECEIVE_RATING, REMOVE_RATING, RECEIVE_RATING_ERRORS } from '../actions/rating_actions';

const ratingsReducer = (oldState={}, action) => {
  let newState = {};
  // debugger
  switch(action.type) {
    case RECEIVE_RATING:
      return Object.assign(oldState,newState,{[action.payload.id]: action.payload});
    case REMOVE_RATING:
      newState = Object.assign(newState,oldState);
      delete newState[action.payload.id];
      return newState;
    default:
      return oldState;
  }
};

export default ratingsReducer;
