import react from 'React';
import { connect } from 'react-redux';
import SessionForm from  './session_form';
import { login, signup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname.slice(1) === 'login' ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    removeErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
