import React from 'react';

class UserStars extends React.Component {
  constructor(props){
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = { className: this.props.className};
  }

  handleHover(e) {
    this.setState({className: this.props.className});
  }


  render() {
    return (
      <div>
      <li className={this.props.className} val={this.props.val}
        onMouseEnter={this.props.onMouseEnter} onClick={this.props.action}>
      </li>
    </div>
    );
  }
}

export default UserStars;
