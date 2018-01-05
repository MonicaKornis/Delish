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
    const recipeItems = this.props.recipes.map( (recipe) =>
      <RecipeIndexItem recipe={recipe} key={recipe.id}/>
    );
    return (
      <div className='recipeIndex'>
        <div className='image'>
          <img src={window.staticImages.featureImage}/>
        </div>
        <br></br>
        <br></br>

          <div className='indexText'>
            <img src={window.staticImages.indexText}/>
          </div>

        <div className = 'index-header'>
          <h1>"Find Your Next Culinary Masterpiece"</h1>
          <p>"Free Recipes, Guides and Tips For Easy, Delicious Cooking"</p>
        </div>
          <ul className="recipe-index">
            // {recipeItems}

            {
              this.props.recipes.map( (recipe) =>
                <RecipeIndexItem recipe={recipe} key={recipe.id}/>
              )

            }
          </ul>
      </div>
    );
  }
}

export default RecipeIndex;
