import React from 'react';
// import { Transition }


class RatingsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let currentRating = this.props.currentRecipeRatings.filter((rating) =>
                        rating.user_id === this.props.currentUserId);

    currentRating = currentRating.length !== 0 ? currentRating[0].rating : 0;
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
      if(currentRating >= num) {
        return <li className='currentRatingFill'></li>;
      } else {
        return <li className='ratingEmpty'></li>;
      }
    });

    let displayRating = currentRating > 0 ? currentStars : avgStars;
    let displayText = currentRating > 0 ? `Your Rating` : `${this.props.currentRecipeRatings.length} ratings`;
    return (

      <div>

        <section className = "ratings-bar">
          <div className='ratingItems'>
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
