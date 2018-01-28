import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from '../actions/comment_actions.js';
import { RECEIVE_RECIPE } from '../actions/recipe_actions';

const commentsReducer = (oldState = {}, action) => {
  let newState = {};
  // debugger
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign(newState,oldState,{[action.payload.id]: action.payload});
    case REMOVE_COMMENT:
      newState = Object.assign(newState,oldState);
      delete newState[action.payload.id];
      return newState;
    case RECEIVE_RECIPE:
      return Object.assign(newState,oldState,action.comments);
    case RECEIVE_COMMENT_LIKE:
      newState = Object.assign(newState,oldState);
      newState[action.payload.likeable_id].numLikes = newState[action.payload.likeable_id].numLikes || 0;
      newState[action.payload.likeable_id].numLikes += 1;
      return newState;
    case REMOVE_COMMENT_LIKE:
      newState = Object.assign(newState,oldState);
      newState[action.payload.likeable_id].numLikes -= 1;
    return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;
