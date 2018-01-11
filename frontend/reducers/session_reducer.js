import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RECIPE_LIKE, RECEIVE_RECIPE_UNLIKE } from '../actions/recipe_actions';
import { RECEIVE_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from '../actions/comment_actions';


const _nullUser = Object.freeze({
  currentUser: null
});

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let currentUser;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.user;
      return Object.assign({},{currentUser});
    case RECEIVE_RECIPE_LIKE:
      currentUser = state.currentUser;
      currentUser.likedRecipeIds = currentUser.likedRecipeIds || [];
      currentUser.likedRecipeIds.push(action.payload.likeable_id);
      return Object.assign({},{currentUser});
    case RECEIVE_RECIPE_UNLIKE:
      currentUser = state.currentUser;
      if (currentUser.likedRecipeIds){
        currentUser.likedRecipeIds = currentUser.likedRecipeIds.filter(id => id !== action.payload.likeable_id );
      }
      return Object.assign({},{currentUser});
    case RECEIVE_COMMENT_LIKE:
      currentUser = state.currentUser;
      currentUser.likedCommentIds = currentUser.likedCommentIds || [];
      if(!currentUser.likedCommentIds.includes(action.payload.likeable_id)) {
        currentUser.likedCommentIds.push(action.payload.likeable_id);
      }
      return Object.assign({}, {currentUser});
    case REMOVE_COMMENT_LIKE:
      currentUser = state.currentUser;
      if(currentUser.likedCommentIds) {
        currentUser.likedRecipeIds = currentUser.likedCommentIds.filter( id => id !== action.payload.likeable_id);
      }
  default:
    return state;
  }
};

export default sessionsReducer;
