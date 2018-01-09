import React from 'react';
import {Link} from 'react-router-dom';
import RecipeIndexItem from './recipe_index_item';
import SessionFormContainer from '../session/session_form_container';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike= this.handleLike.bind(this);
    this.handleColor = this.handleColor.bind(this);
    // this.state = { likedRecipes: this.props.likedRecipes };
  }

  componentDidMount(){
    this.props.fetchRecipes();
  }


  handleLike(recipeId){
    if(this.props.likedRecipes.includes(recipeId)) {
      return (e) => {

        // this.setState({likedRecipes: this.state.likedRecipes.});
        return this.props.unlikeRecipe(recipeId);
      };
    } else {
      return (e) => {
        return this.props.likeRecipe(recipeId);
      };
    }
  }

  handleColor(recipeId) {
    if(this.props.likedRecipes.includes(recipeId)) {
        return "red";
    } else {
      return "white";
    }
  }


  render() {
    // debugger
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
                <RecipeIndexItem recipe={recipe} key={index+1} id={recipe.id} action={this.handleLike} color={this.handleColor(recipe.id)}/>
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
