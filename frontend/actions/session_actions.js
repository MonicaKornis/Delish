import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = (errors) => {
  return{
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};


export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then( user => {
    return dispatch(receiveCurrentUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  }
  );
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then( user => {
    return dispatch(receiveCurrentUser(user));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  }
  );
};

// export const logout = () => dispatch => {
//   return SessionApiUtil.logput().then( response => dispatch(receiveCurrentUser(null),
//   errors => dispatch(receiveErrors(errors.responseJSON))));
// };

export const logout = user => dispatch => {
  return SessionApiUtil.logout().then( response => {
    return dispatch(receiveCurrentUser(null));
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  }
  );
};
