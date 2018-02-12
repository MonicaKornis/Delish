import React from 'react';
import { Transition } from 'react-transition-group';
import UserStars from './user_star';


class RatingsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentRating: this.props.currentRatingNum};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if(this.props.currentRatingNum !== nextProps.currentRatingNum) {
      this.setState({currentRating: nextProps.currentRatingNum});
    }
  }

  handleSubmit(e,num) {
    // debugger
    if(this.props.currentRatingNum !== 0) {
    this.props.updateRating({"rating": num, "recipe_id": this.props.currentRecipe.id, id: this.props.currentRating[0].id});
      this.setState({currentRating: num});
    } else {
      // debugger
      this.props.createRating({"rating": num, "recipe_id": this.props.currentRecipe.id});
      this.setState({currentRating: num});
    }
  }


  render() {
    let currentRating = this.props.currentRecipeRatings.filter((rating) =>
                        rating.user_id === this.props.currentUserId);
    let currentRatingId = currentRating.length !== 0 ? currentRating[0].id : 0;
    currentRating = currentRating.length !== 0 ? currentRating[0].rating : 0;
    let action = currentRating === 0  ? this.props.createRating : this.props.updateRating;
    let actionString = currentRating === 0  ? "createRating" : "updateRating";
    let avgStars;
    let currentStars;

    // debugger
    avgStars = [1,2,3,4,5].map((num) => {
      if(this.props.averageRating >= num) {
        return <li className='avgRatingFill'></li>;
      } else {
        return <li className='ratingEmpty'></li>;
      }
    });

    currentStars = [1,2,3,4,5].map((num) => {
      if(this.state.currentRating >= num) {
        return <li className='currentRatingFill'></li>;
      } else {
        return <li className='ratingEmpty'></li>;
      }
    });


    let hoverStars = [1,2,3,4,5].map((num) => {
      return <UserStars rating={num} actionString={actionString} action={action} recipeId={parseInt(this.props.match.params.recipeId)} action={(e) => this.handleSubmit(e,num)}/>;
    });

    let displayRating = this.state.currentRating > 0 ? currentStars : avgStars;
    let displayText = this.state.currentRating> 0 ? `Your Rating` : `${this.props.currentRecipeRatings.length} ratings`;
    debugger

    return (
      <div>

        <section className = "ratings-bar">


          <div className='ratingItems'>
            <h3 className='ratingNumber'>{displayText}</h3>
            <ul className='hoverStars'>
              {hoverStars}
            </ul>
            <ul className='currentRating'>
              {displayRating}
            </ul>
          </div>
        </section>
      </div>

    );
  }


}

export default RatingsIndex;
