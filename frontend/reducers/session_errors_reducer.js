<<<<<<< HEAD
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from './actions/session_actions';
=======
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
>>>>>>> front-end-auth

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return oldState;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
