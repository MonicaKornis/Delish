import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({recipe}) => (
  <div className='col-recipe-index'>
      <img className="recipeIndexImage" src={recipe.image_url}/>

      <div className='recipeInfo'>
        <div className='titleWrapper'>
          <Link to={`/recipes/${recipe.id}`} id='recipeName'>{recipe.title}</Link>
          <h4 id='author'> By Monica Kornis </h4>
        </div>


        <div className='recipeFooter'>
          <h5 id='cookingTime'> {`${recipe.cooking_time} minutes`}</h5>
          <i className="fa fa-bookmark-o" id='bookmark'></i>
        </div>
      </div>
  </div>

);

export default RecipeIndexItem;
