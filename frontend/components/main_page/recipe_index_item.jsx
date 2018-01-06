import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({recipe}) => (
    <div className='col-recipe-index'>
      <Link to={`/recipes/${recipe.id}`}/>
      <img className="recipeIndexImage" src={recipe.image_url}/>
      
      <div className='recipeInfo'>
        <h3>{recipe.title}</h3>
        <h4> By Monica Kornis </h4>
        <h5> {`${recipe.cooking_time} minutes`}</h5>
      </div>
    </div>

);

export default RecipeIndexItem;
