import { RECEIVE_RATING, REMOVE_RATING } from '../actions/rating_actions';

const ratingsReducer = (oldState={}, action) => {
  let newState = {};
  debugger
  switch(action.type) {
    case RECEIVE_RATING:
    debugger
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
