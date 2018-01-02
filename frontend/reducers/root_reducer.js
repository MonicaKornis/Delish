import { combineReducers } from 'redux';
import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
    errors: errorsReducer,
    session: sessionsReducer
});

export default rootReducer;
