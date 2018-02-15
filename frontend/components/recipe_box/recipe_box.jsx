import React from 'react';
import {Link} from 'react-router-dom';
import RecipeIndexItem from '../main_page/recipe_index_item';


class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike= this.handleLike.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }


  componentDidMount(){
    this.props.fetchRecipes();
  }


  handleLike(recipeId){
    if(this.props.likedRecipes.includes(recipeId)) {
      return (e) => {
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

    let recipeIndexHeader;
    let recipeIndexFooter;
    let recipeCount = this.props.recipes ? this.props.recipes.length : 0;
    let authoredCount = this.props.authoredRecipeIds ? this.props.authoredRecipeIds.length : 0;
    let authoredRecipes = this.props.authoredRecipes || [];
    let AuthoredRecipeItems = (<div></div>);
    let mainClass;
    let containerId;

    if(this.props.match.path !== '/recipes/recipe-box') {
      mainClass = 'flex-recipe-grid';
      containerId = 'main';
      recipeIndexHeader = (
      <div>
        <div className='image'>
          <img src={window.staticImages.featureImage}/>
        </div>
        <br></br>
        <br></br>

          <div id='index-text-id'>
            <img src={window.staticImages.indexText}/>
          </div>

        </div>
      );
    } else {
      containerId = 'recipe-box-container';
      mainClass = 'recipe-box';
      recipeIndexHeader = (
        <div className='recipeBoxHeader'>
        </div>
      );


      recipeIndexFooter = (
        <div className='recipeBoxHeader footer'>
        </div>
      );

      AuthoredRecipeItems = (
        <div className={mainClass}>
        </div>
      );
    }


    return (

      <div className='recipeIndex' id={containerId}>
        {recipeIndexHeader}
        <br></br>
        <br></br>


        <div className='index-header'>
        </div>

          <div className={mainClass}>


            {
              this.props.recipes.map( (recipe,index) =>
                <RecipeIndexItem  author={recipe.author} recipe={recipe} key={index+1} id={recipe.id} action={this.handleLike} color={this.handleColor(recipe.id)}/>
              )
            }
          </div>
        {recipeIndexFooter}

        <div className='index-header'>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default RecipeBox;
