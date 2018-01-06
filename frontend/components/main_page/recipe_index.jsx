import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import SessionFormContainer from '../session/session_form_container';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchRecipes();
  }

  render() {
    // const recipeItems = this.props.recipes.map( (recipe,index) =>
    //   <RecipeIndexItem className="col-recipe-index" recipe={recipe} key={index+1}/>
    // );
    return (
      <div className='recipeIndex'>
        <div className='image'>
          <img src={window.staticImages.featureImage}/>
        </div>
        <br></br>
        <br></br>

          <div id='index-text-id'>
            <img src={window.staticImages.indexText}/>
          </div>

        <div className='index-header'>
        </div>
          <div className="flex-recipe-grid">


            {
              this.props.recipes.map( (recipe,index) =>
                <RecipeIndexItem recipe={recipe} key={index+1}/>
              )

            }
          </div>
      </div>
    );
  }
}

export default RecipeIndex;

//
// <h1>"Find Your Next Culinary Masterpiece"</h1>
// <p>"Free Recipes, Guides and Tips For Easy, Delicious Cooking"</p>
