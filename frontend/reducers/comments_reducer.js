import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions.js';
import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const commentsReducer = (oldState = {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign(newState,oldState,{[action.payload.id]: action.payload});
    case REMOVE_COMMENT:
      newState = Object.assign(newState,oldState);
      delete newState[action.payload.id];
      return newState;
    case RECEIVE_RECIPE:
      return Object.assign(newState,oldState,action.comments);
    default:
      return oldState;
  }
};

export default commentsReducer;
