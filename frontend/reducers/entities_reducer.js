import { combineReducers } from 'redux';
import recipes from './recipes_reducer';
import comments from './comments_reducer';
import ratings from './ratings_reducer';

export default combineReducers({
  recipes,
  comments,
  ratings,
});
