import react from 'React';
import { connect } from 'react-redux';
import { logout, receiveErrors } from '../../actions/session_actions';
import Greeting from './greeting';


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

export default connect(mapStateToProps,mapDispatchToProps)(Greeting);
