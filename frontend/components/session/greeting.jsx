import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

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
    this.props.history.push('/');
    this.props.logout();
  }

  userGreeting() {
    return(
      <div className="main-nav">
        <div className='formImage'>
          <Link to='/' id='delish'>DELISH</Link>
        </div>

        <div className='search-bar-wrapper'>
          <SearchContainer/>
        </div>

        <nav className="right-nav">
            <Link to='/recipes/recipe-box' className='subscribe'> Your Recipe Box: {(this.props.currentUser.email).split('@')[0]}</Link>
            <li className='subscribe'>
              <button className='logoutButton' onClick={this.handleLogout}> Logout</button>
            </li>
        </nav>
      </div>
    );
  }

  guestGreeting() {
    return(
      <div className="main-nav">
        <div className='formImage'>
          <Link to='/' id='delish'>DELISH</Link>
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
