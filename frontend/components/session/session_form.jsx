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
      return (<Link to="/signup"> Sign Up </Link>);
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
      <div>
        {this.headerNav()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Join Delish Cooking
          <br/>
          Please {this.props.formType} or {this.headerNav()}
          {this.errors()}

          <label> Email:
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>

          <label> Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
           <br/>
        <input type="submit" value={buttonVal}/>
        </form>
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
