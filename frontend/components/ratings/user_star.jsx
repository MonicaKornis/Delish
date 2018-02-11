import React from 'react';

class UserStars extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.state = { className: 'ratingEmpty'};
    // debugger
  }

  handleSubmit(e) {
    debugger
    if(this.props.actionString === 'createRating') {
    this.props.action({"rating": this.props.rating, "recipe_id": this.props.recipeId});
    } else {
      this.props.action({"rating": this.props.rating, "recipe_id": this.props.recipeId, id: this.props.currentRatingId});
    }
  }

  handleHover(e) {
    this.setState({className: 'currentRatingFill'});
  }

  removeHover() {
    this.setState({className: 'ratingEmpty'});
  }

  render() {
    // debugger
    return (
      <li className={this.state.className} val={this.props.val}
        onMouseEnter={this.handleHover} onMouseLeave={this.removeHover} onClick={this.handleSubmit}>
      </li>
    );
  }
}

export default UserStars;
