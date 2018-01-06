import { combineReducers } from 'redux';
import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import recipesReducer from './recipes_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
    errors: errorsReducer,
    session: sessionsReducer,
    entities: entities
});

export default rootReducer;
