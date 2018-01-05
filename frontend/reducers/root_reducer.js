import { combineReducers } from 'redux';
import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import recipesReducer from './recipes_reducer';

const rootReducer = combineReducers({
    errors: errorsReducer,
    session: sessionsReducer,
    recipes: recipesReducer
});

export default rootReducer;
