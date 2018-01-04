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
          <img src={window.staticImages.navImage}/>
        </div>
        <nav class="right-nav">
            <li className='welcomeMessage'> Your Recipe Box <br/> {(this.props.currentUser.email).split('@')[0]}</li>
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
          <Link className='subscribe' to='/signup'>Subscribe</Link>  &nbsp;&nbsp;
          <Link className='subscribe' to='/login'>Login</Link>
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
