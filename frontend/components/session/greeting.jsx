import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componendDidMount(){
    this.props.removeErrors();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  userGreeting() {
    return(
      <div class="main-nav">
        <div className='formImage'>
          <img className='formImage' src={window.staticImages.navImage}></img>
        </div>
        <nav class="right-nav">
          <a>
            <li className='welcomeMessage'> Your Recipe Box - {(this.props.currentUser.email).split('@')[0]}</li>
          </a>
          <button className='logoutButton' onClick={this.handleLogout}> Logout</button>
        </nav>
      </div>
    );
  }

  guestGreeting() {
    return(
      <div className="main-nav">
        <div className='formImage'>
          <img src={window.staticImages.navImage}/>
        </div>
        <nav className="right-nav">
          <Link to='/signup'>Subscribe</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </div>
    );
  }

  render() {
    return (
      this.props.currentUser === null ? this.guestGreeting() : this.userGreeting()
    );
  }
}



export default Greeting;
