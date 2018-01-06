import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({recipe}) => (
    <div className='col-recipe-index'>
      <Link to={`/recipes/${recipe.id}`}/>
      <img className="recipeIndexImage" src={recipe.image_url}/>

      <div className='recipeInfo'>
        <div className='titleWrapper'>
          <h3 id='recipeName'>{recipe.title}</h3>
          <h4 id='author'> By Monica Kornis </h4>
        </div>


        <div className='recipeFooter'>
          <h5 id='cookingTime'> {`${recipe.cooking_time} minutes`}</h5>
          <i class="fa fa-bookmark-o bookmark"></i>
        </div>
  </div>
  </div>

);

export default RecipeIndexItem;
