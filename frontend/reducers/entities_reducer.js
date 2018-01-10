import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import comments from './comments_reducer';

export default combineReducers({
  recipes,
  comments,
});
