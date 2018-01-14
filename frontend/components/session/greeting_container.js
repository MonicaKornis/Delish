import React from 'react';
import { connect } from 'react-redux';
import { logout, receiveErrors } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    removeErrors: () => dispatch(receiveErrors([]))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Greeting));
