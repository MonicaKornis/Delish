import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componendDidMount(){
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user).then( () => this.props.history.push('/'));
      // () => this.setState({email: '', password: ''}));
  }

  update(field) {
    return (e) => { this.setState({[field]: e.target.value});};
  }

  headerNav() {
    if(this.props.formType === 'login'){
      return (<div className=''><Link to="/signup"> Sign Up </Link></div>);
    } else {
      return(<Link to="/login">Log In </Link>);
    }
  }

  errors() {
    return (
      <ul>
        {this.props.errors.map((error,i) =>
          <li key={i}>{error}</li>
        )}
      </ul>
    );
  }

  render() {
    const buttonVal = this.props.formType === 'login' ? 'Sign In' : 'Create Account';
    return (
      <div className='session-form-container'>
        {this.headerNav()}
        <div className="session-form">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>Join Delish cooking!</h1>
            <br/>
            Please {this.props.formType} or {this.headerNav()}
            {this.errors()}

            <label> Email:
              <input className='modal-input' type="text" value={this.state.email} onChange={this.update('email')}/>
            </label>

            <label> Password:
              <input className='modal-input' type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
             <br/>
          <input className='button' type="submit" value={buttonVal}/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
// {if(this.props.errors !== null) {
//   return
// }}
//
//
//
// {if }
