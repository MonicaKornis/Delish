import { combineReducers } from 'react-redux';
import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  return {
    errors: errorsReducer,
    session: session
  }
})
