import React from 'react';

class RatingsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    let currentRating = this.props.currentRecipeRatings.filter((rating) =>
                        rating.user_id === this.props.currentUserId);
              
    currentRating = currentRating.length !== 0 ? currentRating[0].rating : 0;

    return(
      <div>

        <div>{this.props.averageRating} Average Rating</div>
        <div>{currentRating} User Rating </div>
      </div>
    );
  }
}

export default RatingsIndex;
