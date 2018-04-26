import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({recipe, action, color, author, currentUser, imageAction}) => (
  <div className='col-recipe-index'>
      <div id='indexImageWrapper'>
      <img className="recipeIndexImage" src={recipe.image_url} onClick={(e) => imageAction(e,recipe.id)}/>
      </div>

      <div className='recipeInfo'>
        <div className='titleWrapper'>
          <Link to={ currentUser ? `/recipes/${recipe.id}` : '/login'} id='recipeName'>{recipe.title}</Link>
          <h4 id='author'> By {author} </h4>
        </div>


        <div className='recipeFooter'>
          <h5 id='cookingTime'> {`${recipe.cooking_time} minutes`}</h5>
          <i className="fa fa-bookmark-o" id='bookmark' onClick={action(recipe.id)} id={color}></i>
        </div>
      </div>
  </div>

);

export default RecipeIndexItem;
