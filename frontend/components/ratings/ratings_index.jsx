import React from 'react';
import { Transition } from 'react-transition-group';
import UserStars from './user_star';


class RatingsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentRating: this.props.currentRatingNum, classNames: ['ratingEmpty','ratingEmpty','ratingEmpty','ratingEmpty','ratingEmpty'], hoverStatus: 'unhover'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.hoverText = { 0: '', 1: 'Not Worth It', 2: 'Fine', 3: 'Good', 4: 'Really Good', 5: 'Delicious!'};
    this.currentText = this.hoverText[0];
    this.hoverStatus = 'unhover';
    this.renderHoverBox = this.renderHoverBox.bind(this);
    this.removeHoverBox = this.removeHoverBox.bind(this);

    this.ratingHoverTransitionStyle = {
      'hover': {
        display: "block",
        position: "absolute",
        right: 35,
        bottom: -20,
        width: "170px",
        height: "80px",
        border: "1px solid #F5F5F5",
        background: "white",
        zIndex: 1
      },

      'unhover': {
        display: 'none'
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.currentRatingNum !== nextProps.currentRatingNum) {
      this.setState({currentRating: nextProps.currentRatingNum});
    }
  }

  handleSubmit(e,num) {
    if(this.props.currentRatingNum !== 0) {
    this.props.updateRating({"rating": num, "recipe_id": this.props.currentRecipe.id, id: this.props.currentRating[0].id});
      this.setState({currentRating: num});
    } else {
      this.props.createRating({"rating": num, "recipe_id": this.props.currentRecipe.id});
      this.setState({currentRating: num});
    }
  }

  handleHover(e,num) {
    this.currentText = this.hoverText[num];
     let newClasses = [1,2,3,4,5].map((i) => {
      if(i <= num) {
        return 'currentRatingFill';
      } else {
        return 'ratingEmpty';
      }
    });

    this.setState({classNames: newClasses});
  }

  mouseLeave(e) {
    this.setState({classNames: ['ratingEmpty','ratingEmpty','ratingEmpty','ratingEmpty','ratingEmpty']});
    this.currentText = '';
  }

  renderHoverBox() {
    this.setState({hoverStatus: 'hover'});
  }

  removeHoverBox() {
    this.setState({hoverStatus: 'unhover'});
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
      return <UserStars rating={num} className={this.state.classNames[num-1]} actionString={actionString} action={action} onMouseEnter={(e) => this.handleHover(e,num)} recipeId={parseInt(this.props.match.params.recipeId)} action={(e) => this.handleSubmit(e,num)} />;
    });



    let displayRating = this.state.currentRating > 0 ? currentStars : avgStars;
    let displayText = this.state.currentRating> 0 ? `Your Rating` : `${this.props.currentRecipeRatings.length} ratings`;


    return (
      <div>
        <section className = "ratings-bar" onMouseLeave={this.removeHoverBox}>
          <div style={this.ratingHoverTransitionStyle[this.state.hoverStatus]}>
            <ul className='hoverStars' onMouseLeave={this.mouseLeave}>
              {hoverStars}
            </ul>
            <h4>{this.currentText}</h4>
          </div>

          <div className='ratingItems' onMouseEnter={this.renderHoverBox}>
            <h3 className='ratingNumber'>{displayText}</h3>

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
