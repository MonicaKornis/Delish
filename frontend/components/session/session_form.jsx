import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componendDidMount(){
    this.props.removeErrors();
  }



  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.history.push('/');
    this.props.processForm(user);

  }

  demoLogin(e) {
    e.preventDefault();
    const user = Object.assign({},{ email: 'MonicaKornis@gmail.com', password: 'password123'});
    this.props.processForm(user).then( () => this.props.history.push('/'));
  }

  update(field) {
    return (e) => { this.setState({[field]: e.target.value});};
  }

  headerNav() {
    if(this.props.formType === 'login'){
      return (<Link className='sessionButton' to="/signup"> Sign Up </Link>);
    } else {
      return(<Link className='sessionButton' to="/login">Log In </Link>);
    }
  }

  errors() {
    return (
      <ul className='errors'>
        {this.props.errors.map((error,i) =>
          <li key={i}>{error}</li>
        )}
      </ul>
    );
  }

  render() {
    const buttonVal = this.props.formType === 'login' ? 'Sign In' : 'Create Account';
    const demoLogin = this.props.formType === 'login' ?
        <button className="button" onClick={this.demoLogin}>
      Log in with demo</button> : <div></div> ;


    return (
      <div className='session-form-container'>
        <div className="session-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <Link className='exit-button' to="/"> X </Link>

          <h1 className='welcomeMessage'>Join Delish cooking!</h1>
              {
                buttonVal === 'Sign In' ? <h2 className='greeting'>Don't already have an account? {this.headerNav()}</h2>
              : <h2 className='greeting'> Already have an account? {this.headerNav()}</h2>
              }
            {this.errors()}

            <div id='session-input'>
            <label> Email:
              <input className='modal-input' placeholder='Email' type="text" value={this.state.email} onChange={this.update('email')}/>
            </label>

            <label> Password:
              <input className='modal-input' placeholder='Password' type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
             <br/>
          <input className='button' type="submit" value={buttonVal}/>
          {demoLogin}
          </div>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
