import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  userGreeting() {
    return(
      <nav class='user-greeting'>
        <p> Welcome, {(this.props.currentUser.email).split('@')[0]}!</p>
        <br></br>
        <p> View your recipes </p>
        <button onClick={() => this.props.logout}> Logout</button>
      </nav>
    );
  }

  guestGreeting() {
    return(
      <nav>
        <Link to='/signup'>Sign Up</Link>
        <br></br>
        <Link to='/login'>Login</Link>
      </nav>
    );
  }

  render() {
    return (
      this.props.currentUser === null ? this.guestGreeting() : this.userGreeting()
    );
  }
}



export default Greeting;
