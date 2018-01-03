<<<<<<< HEAD
import { RECEIVE_CURRENT_USER } from './actions/session_actions';
=======
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
>>>>>>> front-end-auth

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return Object.assign({},{currentUser});
  default:
    return state;
  }
};

export default sessionsReducer;
